import React from 'react'
import { StyleSheet, Text, View ,TextInput} from 'react-native'
import ScreenDetails from '../../constant/ScreenDetails';
import Colors from '../../constant/Colors';

export default function OTPTextInput(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        otpInput:{
           width:screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5,
           flexDirection:'row',
           alignItems:'center',
           justifyContent:'space-between',
           marginVertical:10 * screenDetails.unit,
        },
        textInput:{
            color:Colors.black,
            borderColor:Colors.black,
            borderWidth:2 * screenDetails.unit,
            borderRadius:5,
            textAlign:'center',
            fontSize:25* screenDetails.unit,
            paddingVertical:5* screenDetails.unit,
            paddingHorizontal:8* screenDetails.unit,
        }
    })
    const refpin1= React.useRef('');
    const refpin2= React.useRef('');
    const refpin3= React.useRef('');
    const refpin4= React.useRef('');
    const refpin5= React.useRef('');
    const refpin6= React.useRef('');
    const [pin1 , setPin1] = React.useState("");
    const [pin2 , setPin2] = React.useState("");
    const [pin3 , setPin3] = React.useState("");
    const [pin4 , setPin4] = React.useState("");
    const [pin5 , setPin5] = React.useState("");
    const [pin6 , setPin6] = React.useState("");

    return (
        <View style={styles.otpInput}>
            <TextInput
                ref={refpin1}
                style={styles.textInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pin1}
                onChangeText={text => {
                    setPin1(text);
                    if(text != ''){
                        refpin2.current.focus();
                    }
                    props.fn(text+pin2+pin3+pin4+pin5+pin6);
                }}
            />
            <TextInput
                ref={refpin2}
                style={styles.textInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pin2}
                onChangeText={text => {
                    setPin2(text);
                    if(text != ''){
                        refpin3.current.focus();
                    }
                    props.fn(pin1+text+pin3+pin4+pin5+pin6);
                }}
            />
            <TextInput
                ref={refpin3}
                style={styles.textInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pin3}
                onChangeText={text => {
                    setPin3(text);
                    if(text != ''){
                        refpin4.current.focus();
                    }
                    props.fn(pin1+pin2+text+pin4+pin5+pin6);
                }}
            />
            <TextInput
                ref={refpin4}
                style={styles.textInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pin4}
                onChangeText={text => {
                    setPin4(text);
                    if(text != ''){
                        refpin5.current.focus();
                    }
                    props.fn(pin1+pin2+pin3+text+pin5+pin6);
                }}
            />
            <TextInput
                ref={refpin5}
                style={styles.textInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pin5}
                onChangeText={text => {
                    setPin5(text);
                    if(text != ''){
                        refpin6.current.focus();
                    }
                    props.fn(pin1+pin2+pin3+pin4+text+pin6);
                }}
            />
            <TextInput
                ref={refpin6}
                style={styles.textInput}
                maxLength={1}
                keyboardType="number-pad"
                value={pin6}
                onChangeText={text => {
                    setPin6(text);
                    props.fn(pin1+pin2+pin3+pin4+pin5+text);
                }}
            />
        </View>
    )
}


