import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import TextInput from '../../components/InputFeild/TextInput';

export default function SignIn() {
   const [text , setText] = React.useState('');
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    function fn(text){
        setText(text);
    }

    return (
        <View>
            <Text>Hello </Text>
            <TextInput
            labal="enter"
            iconname="person"
            value={text}
            fn={fn}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
