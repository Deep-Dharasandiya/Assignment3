import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import TextField from '../../components/InputFeild/TextFeild';
import PasswordField from '../../components/InputFeild/PasswordFeild';
import Colors from '../../constant/Colors';
import ScreenDetails from '../../constant/ScreenDetails';
import CornerDesign from '../../components/CornerDesign';
import Logo from '../../components/Logo';
import SubmitButton from '../../components/Button/SubmitButton';
import AuthenticationTitle from '../../components/Title/AuthenticationTitle';
import Loader from '../../components/Loader';
import Aleart from '../../components/Aleart';
import { isEmail,isValidPassword } from '../../constant/Validation';
import { getValue } from '../../services/AsyncStorage';

export default function SignIn(props) {
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
        forgotPassword:{
            marginTop:10 * screenDetails.unit,
            alignSelf:'flex-end',
        },
        forgotPasswordText:{
            fontSize:18 * screenDetails.unit,
            color:Colors.lightblue,
            fontWeight:'500',
        },
        signUpLink:{
            marginTop:screenDetails.isPotraite? 20 * screenDetails.unit:0,
            alignItems:'center',
        },
        signUpLinkText:{
            fontSize:20 * screenDetails.unit,
            color:Colors.lightblue,
            fontWeight:'500',
        }
    })

   const [email , setEmail] = React.useState('');
   const [password , setPassword] = React.useState('');
   
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    const [isLoading , setIsLoading] = React.useState(false);
    const [aleartMessage, setAleartMessage] = React.useState('');
    function onHandleLoader(flag){
        setIsLoading(flag);
    }
    function onAleartMessage(msg){
        setAleartMessage(msg);
    }

    function onChangeEmail(text){
        setEmail(text);
    }
    function onChangePassword(text){
        setPassword(text);
    }
    function onForgotPassword(){
        props.navigation.navigate('ForGotPassword1');
    }
   
     async function onSignIn(){
        
       if(email !='' && password != ''){
           if(isEmail(email)){
              if(isValidPassword(password)){
                onHandleLoader(true);
                //console.log( await getValue('isSignUp'));
                //if(await getValue('isSignUp')=='true'){
                //    console.log(getValue('details'));
               // }
                setTimeout(() => {
                    onHandleLoader(false);
                    onAleartMessage("Successfuly SignIn")
                    setTimeout(() => {
                        props.navigation.navigate('BottomTabNavigation');
                      }, 1000);
                  }, 3000);
                 
              }else{
                onAleartMessage("Invalid Password")
              }
           }else{
            onAleartMessage("Invalid Email")
           }
       }else{
        onAleartMessage("Please Enter All Details")
       }
    }
    function onSignUp(){
        props.navigation.navigate('SignUpStep1');
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
                />)}
                

                 <AuthenticationTitle
                    title="Please SignIn"
                 />

                <TextField
                    lable="Email:"
                    keypadtipe="email-address"
                    ismultipleline={false}
                    iconname="person"
                    value={email}
                    fn={onChangeEmail}
                />

                <PasswordField
                    lable="Password:"
                    ismultipleline={false}
                    iconname="key"
                    value={password}
                    fn={onChangePassword}
                />

                <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={onForgotPassword}>

                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>

                </TouchableOpacity>

                <SubmitButton
                        height={50}
                        width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                        lable="Submit"
                        iconname="md-checkmark-circle-sharp"
                        fn={onSignIn}
                />

                <TouchableOpacity
                    style={styles.signUpLink}
                    onPress={onSignUp}>

                        <Text style={styles.signUpLinkText}>I haven't account?</Text>

                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}