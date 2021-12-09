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
            paddingRight: 10,
            marginTop: 10,
            borderRadius: 10,
            fontSize: 15,
            backgroundColor: Colors.blurblue,
        },
        icon:{
            marginHorizontal: 20,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        textinput:{
            flex: 1,
            color:Colors.black
        }
    });
    return (
      <View style={styles.textFeildView}>
       <Icon
        style={styles.icon}
        name={props.iconname}
        color={Colors.gray}
        size={22}
      /> 
      <TextInput
        style={styles.textinput}
        //keyboardType={props.keypadtipe}
       //maxLength={props.maxlength}
        placeholder={props.lable}
        fontSize={20}
        //multiline={props.ismultipleline}
        placeholderTextColor={Colors.gray}
        onChangeText={text => props.fn(text)}
        defaultValue={props.value}
      />
    </View>
    )
    
  }