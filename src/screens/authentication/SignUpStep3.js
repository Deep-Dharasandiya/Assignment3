import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constant/Colors';
import ScreenDetails from '../../constant/ScreenDetails';
import CornerDesign from '../../components/CornerDesign';
import Logo from '../../components/Logo';
import SubmitButton from '../../components/Button/SubmitButton';
import AuthenticationTitle from '../../components/Title/AuthenticationTitle';
import TextField from '../../components/InputFeild/TextFeild';
import PasswordField from '../../components/InputFeild/PasswordFeild';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MediaSelection from '../../components/MediaSelection';
import Loader from '../../components/Loader';
import Aleart from '../../components/Aleart';
import { isValidPassword } from '../../constant/Validation';
import { setValue } from '../../services/AsyncStorage';

export default function SignUpStep3(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        container:{
            flex:1,
            flexDirection:screenDetails.isPotraite?'column':'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:Colors.white,
            padding: screenDetails.isPotraite?screenDetails.width * 0.05:screenDetails.height * 0.05,
        },
        scrollView:{
            flexGrow:1,
            width:screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5,
            alignItems:'center',
            justifyContent:'center'
        },
        image:{
          height:150 *screenDetails.unit,
          width: 150 * screenDetails.unit,
          borderRadius: 75* screenDetails.unit,
          borderColor:Colors.lightblue,
          borderWidth: 2 * screenDetails.unit,
          marginTop:20*screenDetails.unit,
        },
        imgstyle:{
            alignSelf:'center',
            justifyContent:'center',
            height:146 *screenDetails.unit,
            width: 146 * screenDetails.unit,
            borderRadius: 73* screenDetails.unit,
        },
        signInLink:{
            marginTop:screenDetails.isPotraite? 20 * screenDetails.unit:0,
            alignItems:'center',
        },
        signInLinkText:{
            fontSize:20 * screenDetails.unit,
            color:Colors.lightblue,
            fontWeight:'500',
        }
    })

   const [userName , setUserName] = React.useState('');
   const [firstName , setFirstName] = React.useState('');
   const [lastName , setLastName] = React.useState('');
   const [password , setPassword] = React.useState('');
   const [profieImageUri, setprofieImageUri] =React.useState('');
   const [isMediaSelection , setMediaSelection] = React.useState(false);

   const [isLoading , setIsLoading] = React.useState(false);
    const [aleartMessage, setAleartMessage] = React.useState('');
    function onHandleLoader(flag){
        setIsLoading(flag);
    }
    function onAleartMessage(msg){
        setAleartMessage(msg);
    }

   const mediyaselectionType = [
    {
        value: 'From Camera',
    }, {
        value: 'From Gellary',
    },];
    
    function onChangeUserName(name){
        setUserName(name);
    }

    function onChangeFirstName(name){
        setFirstName(name);
    }

    function onChangeLastName(name){
        setLastName(name);
    }

    function onChangePassword(name){
        setPassword(name);
    }

    function onChangeMediaSelection(media){
        onHandleMediaSelection(false);
       if(media =='From Camera'){
         onChangeCameraImage();
       }else{
        onChangeGelleryImage();
       }
    }

    function onHandleMediaSelection(flag){
        setMediaSelection(flag)
    }

    const options = {
        storageOptions: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: false,
      };

    function onChangeCameraImage(){
        launchCamera(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                if(response.hasOwnProperty('assets')){
                    setprofieImageUri(response.assets[0]['uri']);
                }
            }
          });
    }
    function onChangeGelleryImage(){
        launchImageLibrary(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                if(response.hasOwnProperty('assets')){
                    setprofieImageUri(response.assets[0]['uri']);
                }
           
            }
            });
        
    }
   
     async function onRegister(){
       if(userName !='' && firstName !='' && lastName !='' && password !='' && profieImageUri !=''){
           if(isValidPassword(password)){
            onHandleLoader(true);
            const details = new Object();
            details.email=props.route.params.email;
            details.userName = userName;
            details.firstName = firstName;
            details.lastName = lastName;
            details.password = password;
            details.profileImageUri = profieImageUri;
            if(await setValue('details' , details)){
                if(await setValue('isSignUp' , 'true')){
                    setTimeout(() => {
                        onHandleLoader(false);
                        onAleartMessage("successFully Register")
                        setTimeout(() => {
                            props.navigation.popToTop();
                          }, 1000);
                      }, 1000);
                    
                }else{
                    onAleartMessage("some error")
                }
            }else{
                onAleartMessage("some error")
            }

            
           }else{
            onAleartMessage("Invalid Password")
           }

       }else{
         onAleartMessage("Please Enter All Details");
       }
    }
    function onSignIn(){
        props.navigation.popToTop();
    }
   
   

    return (
        <SafeAreaView style={styles.container}>
            <CornerDesign
               cornerPosition="top"
            />
            <CornerDesign
               cornerPosition="bottom"
            />
           <Loader
            isVisible ={isLoading}
            fn={onHandleLoader}
            />
            <Aleart
              isVisible={aleartMessage !=''}
              message={aleartMessage}
              fn={onAleartMessage}
            />
          {!screenDetails.isPotraite &&(
                <View style={{width:screenDetails.width*0.35}}>
                     <Logo
                        position="Vertical"
                        height={140 * screenDetails.unit}
                     />
                 </View>
               
            )}
            
            <ScrollView 
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}> 
                {screenDetails.isPotraite &&(
                    <Logo
                    position="Horizontal"
                    height={90 * screenDetails.unit}
                    />
                )}

                <AuthenticationTitle
                    title="SignUp 3/3"
                />
                 <TouchableOpacity
                    style={styles.signInLink}
                    onPress={ ()=>{onHandleMediaSelection(true)}}>
                    <View style={styles.image}>
                        {profieImageUri != '' && (
                        <Image
                            source={{uri:profieImageUri}}
                            style={styles.imgstyle} />
                        )}
                    </View>
                </TouchableOpacity>
                <MediaSelection
                    lable="Select Media:"
                    data={mediyaselectionType}
                    fn={onChangeMediaSelection}
                    isVisible={isMediaSelection}
                    fn2={onHandleMediaSelection}
                />
                <TextField
                    lable="UserName:"
                    keypadtipe="email-address"
                    ismultipleline={false}
                    iconname="person"
                    value={userName}
                    fn={onChangeUserName}
                />  
                <TextField
                    lable="First Name:"
                    keypadtipe="email-address"
                    ismultipleline={false}
                    iconname="person"
                    value={firstName}
                    fn={onChangeFirstName}
                />  
                <TextField
                    lable="Last Name:"
                    keypadtipe="email-address"
                    ismultipleline={false}
                    iconname="person"
                    value={lastName}
                    fn={onChangeLastName}
                />  
                 <PasswordField
                    lable="Password:"
                    ismultipleline={false}
                    iconname="key"
                    value={password}
                    fn={onChangePassword}
                />

                 
        
                <SubmitButton
                        height={50}
                        width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                        lable="Register"
                        iconname="md-checkmark-circle-sharp"
                        fn={onRegister}
                />

                <TouchableOpacity
                    style={styles.signInLink}
                    onPress={onSignIn}>

                        <Text style={styles.signInLinkText}>I have account?</Text>

                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}