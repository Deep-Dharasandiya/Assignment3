import React from 'react'
import { StyleSheet, Text, View ,Modal,ActivityIndicator,TouchableOpacity} from 'react-native'
import Colors from '../constant/Colors'
import ScreenDetails from '../constant/ScreenDetails';
import Logo from './Logo';
import SubmitButton from './Button/SubmitButton';

export default function Aleart(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        container:{
           padding:5*screenDetails.unit,
           width:screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5,
           marginVertical:20 * screenDetails.unit,
           backgroundColor:Colors.white,
           borderColor:Colors.lightblue,
           borderWidth:2,
           borderRadius:10*screenDetails.unit,
           shadowColor: Colors.lightblue,
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 10*screenDetails.unit,
            justifyContent:'center',
           alignItems:'center',
          },
    })
    return (
        <Modal
          transparent={true}
          supportedOrientations={['portrait', 'landscape']}
          animationType='none'
          visible={props.isVisible}
          onRequestClose={() => {
            props.fn('');
          }}
        >
             <TouchableOpacity
                onPress={() =>  props.fn('')}
                style={{flex:1,alignItems:'center',justifyContent:'center'}}
                >
                <View style={styles.container}>
                    <Logo
                    position="Horizontal"
                    height={40 * screenDetails.unit}
                    />
                    <View style={{height:2,width:150* screenDetails.unit, backgroundColor:Colors.black}}/>
                    <Text style={{fontSize:18*screenDetails.unit,marginTop:10}}>{props.message}</Text>
                    <View style={{width:60,backgroundColor:Colors.blurblue,padding:5 *screenDetails.unit,alignItems:'center',justifyContent:'center',borderRadius:5,marginVertical:10}}>
                        <Text style={{color:Colors.lightblue,fontWeight:'600'}}>OK</Text>
                        </View>

                </View>
            </TouchableOpacity>
         
        </Modal>
    )
}


