import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../constant/Colors';
import ScreenDetails from '../../../constant/ScreenDetails';
import CornerDesign from '../../../components/CornerDesign';
import Logo from '../../../components/Logo';
import SubmitButton from '../../../components/Button/SubmitButton';
import AuthenticationTitle from '../../../components/Title/AuthenticationTitle';
import PasswordField from '../../../components/InputFeild/PasswordFeild';
import Loader from '../../../components/Loader';
import Aleart from '../../../components/Aleart';
import { isValidPassword } from '../../../constant/Validation';

export default function ForGotPassword3(props) {
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
    })

   const [password , setPassword] = React.useState('');
   const [rePassword , setRePassword] = React.useState('');

   const [isLoading , setIsLoading] = React.useState(false);
    const [aleartMessage, setAleartMessage] = React.useState('');
    function onHandleLoader(flag){
        setIsLoading(flag);
    }
    function onAleartMessage(msg){
        setAleartMessage(msg);
    }
    function onChangePassword(text){
        setPassword(text);
    }
    function onChangeRePassword(text){
        setRePassword(text);
    }
    function onSubmit(){
       if(password !='' && rePassword !=''){
           if(isValidPassword(password)){
            if(password==rePassword){
                onHandleLoader(true);
                setTimeout(() => {
                    onHandleLoader(false);
                    onAleartMessage("Password Successfully Changed");
                    setTimeout(() => {
                        props.navigation.popToTop();
                      }, 1000);
    
                  }, 3000);
                
               }else{
                onAleartMessage("Both Passwords are must be same!")
               }
        }else{
            onAleartMessage("Invalid Password")
        }

       }else{
         onAleartMessage("Enter Password")
       }
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
                    title="ForGotPassword 3/3"
                 />
        

                <PasswordField
                    lable="New Password:"
                    ismultipleline={false}
                    iconname="key"
                    value={password}
                    fn={onChangePassword}
                />
                 <PasswordField
                    lable="Re-Password:"
                    ismultipleline={false}
                    iconname="key"
                    value={rePassword}
                    fn={onChangeRePassword}
                />


                <SubmitButton
                        height={50}
                        width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                        lable="Submit"
                        iconname="md-checkmark-circle-sharp"
                        fn={onSubmit}
                />


            </ScrollView>

        </SafeAreaView>
    )
}