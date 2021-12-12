import React from 'react'
import { StyleSheet, View ,TextInput} from 'react-native'
import ScreenDetails  from '../../constant/ScreenDetails';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default  function TextField(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        textFeildView:{
            flexDirection: 'row',
            width:props.width,
            paddingRight: 10 * screenDetails.unit,
            marginTop: 20 * screenDetails.unit,
            borderRadius: 10 * screenDetails.unit,
            fontSize: 15 * screenDetails.unit,
            backgroundColor: Colors.blurblue,
            shadowColor: Colors.black,
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5 * screenDetails.unit,
        },
        icon:{
            marginHorizontal: 20 * screenDetails.unit,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        textinput:{
            flex: 1,
            color:Colors.black,
        }
    });
    return (
      <View style={styles.textFeildView}>
       <Icon
        style={styles.icon}
        name={props.iconname}
        color={Colors.gray}
        size={22 * screenDetails.unit}
      /> 
      <TextInput
        style={styles.textinput}
        keyboardType={props.keypadtipe}
        maxLength={props.maxlength}
        placeholder={props.lable}
        fontSize={20 * screenDetails.unit}
        multiline={props.ismultipleline}
        placeholderTextColor={Colors.gray}
        onChangeText={text => props.fn(text)}
        defaultValue={props.value}
      />
    </View>
    )
    
  }