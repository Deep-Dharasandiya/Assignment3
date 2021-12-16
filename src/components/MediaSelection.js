import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Modal,ScrollView} from 'react-native'
import ScreenDetails from '../constant/ScreenDetails';
import Colors from '../constant/Colors';

export default function MediaSelection(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
       container:{
         padding:20*screenDetails.unit,
         marginVertical:50*screenDetails.unit,
        width:screenDetails.width*0.8,
        backgroundColor:Colors.white,
        borderRadius:10*screenDetails.unit,
        shadowColor: Colors.black,
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 20*screenDetails.unit,
        
        justifyContent:'center'
       },
       title:{
        fontSize: 20*screenDetails.unit,
        color:Colors.black,
        fontWeight:'600',
        marginBottom:15*screenDetails.unit,
       },
       optionView:{
         backgroundColor:Colors.blurblue,
         marginVertical:5*screenDetails.unit,
         padding:10*screenDetails.unit,
         borderRadius:5*screenDetails.unit,
         marginVertical:5*screenDetails.unit,
         padding:10*screenDetails.unit,
         borderRadius:5*screenDetails.unit,
       }
    });

    const option =(props.data).map((item,index) =>{
      return (
        <TouchableOpacity
           key={item.value}
           style={styles.optionView}
          onPress={() => {
            props.fn(item.value);
          }}
          >
            <Text>{item.value}</Text>
          </TouchableOpacity>
      )
    })
    return (
        <View>
          <Modal
            transparent={true}
            supportedOrientations={['portrait', 'landscape']}
            animationType='none'
            visible={props.isVisible}
            nRequestClose={()=>props.fn2(false)}>
              <TouchableOpacity
          onPress={() => props.fn2(false)}
          style={{flex:1,alignItems:'center',justifyContent:'center'}}
          >
            <View style={styles.container}>
              <ScrollView>
              <Text style={styles.title} >
               {props.lable}
              </Text>
                {option}
                </ScrollView>
              </View>
            </TouchableOpacity>

          </Modal>
      </View>
    )
}
