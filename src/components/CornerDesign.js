import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constant/Colors';
import ScreenDetails from '../constant/ScreenDetails';
export default function CornerDesign(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
         cornerDesign:{
            position: 'absolute',
            height: 130 * screenDetails.unit,
            width: 130 * screenDetails.unit,
            backgroundColor: '#D8F0FF',
         },
         upperCorner:{
            top:0,
            right:0,
            borderBottomLeftRadius: 150 * screenDetails.unit,
         },
         bottomCorner:{
             bottom:0,
             left:0,
             borderTopRightRadius: 150 * screenDetails.unit,
         }

    })
    return (
        props.cornerPosition =='top' ?
            <LinearGradient
            style={{...styles.upperCorner,...styles.cornerDesign,}}
            colors={[Colors.white,Colors.blurblue]}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}></LinearGradient>
            :
            <LinearGradient
            style={{...styles.bottomCorner,...styles.cornerDesign,}}
            colors={[Colors.white,Colors.blurblue]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}></LinearGradient>

        
    )
}


