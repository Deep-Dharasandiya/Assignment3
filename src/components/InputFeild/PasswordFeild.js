import React from 'react'
import { StyleSheet, View ,TextInput,TouchableOpacity} from 'react-native'
import ScreenDetails  from '../../constant/ScreenDetails';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default  function PasswordField(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
      passwordFeildView:{
            flexDirection: 'row',
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
            marginRight:30 * screenDetails.unit,
            paddingVertical: 10 * screenDetails.unit,
        },
        PasswordVisibilityBtn: {
          position: 'absolute',
          right: 0,
          alignSelf: 'center',
          width: 20 * screenDetails.unit,
          marginHorizontal:15 * screenDetails.unit,
        },
    });

    const [passwordvisibility, setpasswordvisibility] = React.useState(false);
    return (
      <View style={styles.passwordFeildView}>
        <Icon
          style={styles.icon}
          name={props.iconname}
          color="gray"
          size={22 * screenDetails.unit}
        />
        <TextInput
          style={styles.textinput}
          placeholder={props.lable}
          secureTextEntry={passwordvisibility ? false : true}
          fontSize={20 * screenDetails.unit}
          placeholderTextColor="gray"
          onChangeText={text => props.fn(text)}
          defaultValue={props.value}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.PasswordVisibilityBtn}
          onPress={() => setpasswordvisibility(!passwordvisibility)}>
          {passwordvisibility ? (
            <Icon name="eye-off" color="gray" size={22 * screenDetails.unit} />
          ) : (
            <Icon name="eye" color="gray" size={22 * screenDetails.unit} />
          )}
        </TouchableOpacity>
    </View>
    )
    
  }