import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constant/Colors';
import ScreenDetails from '../../constant/ScreenDetails';

export default function AuthenticationTitle(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
       title:{
        fontSize: 25*screenDetails.unit,
        color:Colors.lightblue,
        fontWeight:'600',
        textAlign:'center',
       }
    })
    return (
        <Text style={styles.title} >
        {props.title}
      </Text>
    )
}
