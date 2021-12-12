import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constant/Colors';
import ScreenDetails from '../../constant/ScreenDetails';
import CornerDesign from '../../components/CornerDesign';
import Logo from '../../components/Logo';
import SubmitButton from '../../components/Button/SubmitButton';
import AuthenticationTitle from '../../components/Title/AuthenticationTitle';
import OTPTextInput from '../../components/InputFeild/OTPTextInput';
import Loader from '../../components/Loader';
import Aleart from '../../components/Aleart';
import { isValidPin } from '../../constant/Validation';

export default function SignUpStep2(props) {
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
        otpIntruction:{
            fontSize:18 * screenDetails.unit,
            color:Colors.black,
            textAlign:'left',
            marginTop:20,
            marginBottom:10
        },
        otpReSend:{
            marginTop:10 * screenDetails.unit,
            alignSelf:'flex-end',
        },
        otpReSendText:{
            fontSize:18 * screenDetails.unit,
            color:Colors.lightblue,
            fontWeight:'500',
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

   const [otp , setOTP] = React.useState('');

   const [isLoading , setIsLoading] = React.useState(false);
    const [aleartMessage, setAleartMessage] = React.useState('');
    function onHandleLoader(flag){
        setIsLoading(flag);
    }
    function onAleartMessage(msg){
        setAleartMessage(msg);
    }
    function onChangeOTP(otp){
        setOTP(otp);
    }
    function onOTPReSenr(){

    }
    function onNext(){
       if(otp !='' ){
           if(isValidPin(otp)){
            onHandleLoader(true);
            setTimeout(() => {
                onHandleLoader(false);
                props.navigation.navigate('SignUpStep3',{email:props.route.params.email});
              }, 3000);
            
           }else{
            onAleartMessage("Invalid OTP")
           }

       }else{
        onAleartMessage("Please Enter OTP")
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
                />)}

                 <AuthenticationTitle
                    title="SignUp 2/3"
                 />
                 
                 <Text style={styles.otpIntruction}>Please enter OTP which is sent on {props.route.params.email}</Text>
               
                <OTPTextInput
                    fn={onChangeOTP}
                />

                <TouchableOpacity
                    style={styles.otpReSend}
                    onPress={onOTPReSenr}>

                        <Text style={styles.otpReSendText}>Re Send</Text>

                </TouchableOpacity>
              
                <SubmitButton
                        height={50}
                        width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                        lable="Next"
                        iconname="md-checkmark-circle-sharp"
                        fn={onNext}
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