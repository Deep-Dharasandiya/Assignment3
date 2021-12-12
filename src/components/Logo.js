import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import Colors from '../constant/Colors';
import ScreenDetails from '../constant/ScreenDetails'

export default function Logo(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        container:{
            display:'flex',
            flexDirection:props.position=='Horizontal'?'row':'column',
            //height:100 * screenDetails.unit,
            alignItems:'center',
            justifyContent:'center',
            margin:10 * screenDetails.unit,
        },
        icon:{
            height:props.height,
            width:props.height,
            marginLeft:10 * screenDetails.unit,
        },
        appName:{
            fontSize:props.height/3,
            color:Colors.black,
        }
    })

    return (
        <View style={styles.container}>
             <Image
              style={styles.icon}
              resizeMode="contain"
              source={require('../constant/images/appIcon.png')}
            />
              <Text style={styles.appName}>Smedia</Text>
        </View>
    )
}

