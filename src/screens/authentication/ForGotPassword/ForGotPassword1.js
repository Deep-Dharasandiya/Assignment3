import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../../../components/InputFeild/TextFeild';
import Colors from '../../../constant/Colors';
import ScreenDetails from '../../../constant/ScreenDetails';
import CornerDesign from '../../../components/CornerDesign';
import Logo from '../../../components/Logo';
import SubmitButton from '../../../components/Button/SubmitButton';
import AuthenticationTitle from '../../../components/Title/AuthenticationTitle';
import Loader from '../../../components/Loader';
import Aleart from '../../../components/Aleart';
import { isEmail } from '../../../constant/Validation';

export default function ForGotPassword(props) {
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
        instruction:{
            fontSize:18 * screenDetails.unit,
            color:Colors.black,
            textAlign:'left',
            marginTop:20,
            marginBottom:10
        }
    })

   const [email , setEmail] = React.useState('');

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
    function onNext(){
        if(email !='' ){
            if(isEmail(email)){
             onHandleLoader(true);
             setTimeout(() => {
                 onHandleLoader(false);
                 props.navigation.navigate('ForGotPassword2',{email:email});
               }, 3000);
             
            }else{
             onAleartMessage("Invalid email address")
            }
 
        }else{
         onAleartMessage("Please Enter register email address")
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
                    title="ForGotPassword 1/3"
                 />
                 <Text style={styles.instruction}>Please enter register email address</Text>

                <TextField
                    lable="Email:"
                    keypadtipe="email-address"
                    ismultipleline={false}
                    iconname="person"
                    value={email}
                    fn={onChangeEmail}
                />


                <SubmitButton
                        height={50}
                        width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                        lable="Next"
                        iconname="md-checkmark-circle-sharp"
                        fn={onNext}
                />


            </ScrollView>

        </SafeAreaView>
    )
}