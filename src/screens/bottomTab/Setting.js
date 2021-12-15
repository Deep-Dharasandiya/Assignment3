import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SubmitButton from '../../components/Button/SubmitButton'
import ScreenDetails from '../../constant/ScreenDetails'
export default function Setting(props) {
    const screenDetails=ScreenDetails();

    const styles = StyleSheet.create({
        container:{
            alignItems:'center',
        }
    })

    function onPrivacyPolicy(){
        props.navigation.navigate('PrivacyPolicy');
    }
    function onAboutPage(){
        props.navigation.navigate('AboutPage');
    }
    return (
        <View style={styles.container}>
            <SubmitButton
                    height={50}
                    width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                    lable="Privacy Policy"
                    iconname="ios-shield-checkmark"
                    fn={onPrivacyPolicy}
            />
            <SubmitButton
                height={50}
                width={screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5}
                lable="About page"
                iconname="md-star-sharp"
                fn={onAboutPage}
                />
        </View>
    )
}
