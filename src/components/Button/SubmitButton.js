import React from 'react'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import ScreenDetails from '../../constant/ScreenDetails';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SubmitButton(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        btnStyle:{
            height:props.height,
            width:props.width,
            borderRadius:10*screenDetails.unit,
            alignItems:'center',
            justifyContent:'center',
            marginVertical:20*screenDetails.unit,
            backgroundColor:Colors.lightblue,
            flexDirection:'row'
        },
        btnText:{
            fontSize: 23*screenDetails.unit,
            fontWeight:'600',
            color:Colors.white
        },
        icon:{
         marginHorizontal: 10*screenDetails.unit,
         alignSelf: 'center',
         justifyContent: 'center'
        },
     });
    return (
        <TouchableOpacity
          onPress={() => props.fn()}
          style={styles.btnStyle}
          >
            <Icon
                style={styles.icon}
                name={props.iconname}
                color={Colors.white}
                size={22*screenDetails.unit}
            />
            <Text style={styles.btnText}>
                {props.lable}
           </Text>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
