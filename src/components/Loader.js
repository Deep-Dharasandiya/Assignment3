import React from 'react'
import { StyleSheet, Text, View ,Modal,ActivityIndicator,TouchableOpacity} from 'react-native'
import Colors from '../constant/Colors'
import ScreenDetails from '../constant/ScreenDetails';
import Logo from './Logo';

export default function Loader(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        container:{
           padding:5*screenDetails.unit,
           width:200 * screenDetails.unit,
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
            //props.fn(false);
          }}
        >
            <View  style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={styles.container}>
                    <Logo
                    position="Horizontal"
                    height={40 * screenDetails.unit}
                    />
                    <View style={{height:2,width:150* screenDetails.unit, backgroundColor:Colors.black}}/>
                    <ActivityIndicator
                        animating={props.isVisible}
                        color={Colors.lightblue}
                        size={'large'}
                        style={{marginVertical:15 * screenDetails.unit}}
                        />
                    <Text style={{fontSize:18*screenDetails.unit,}}>Please Wait</Text>
                </View>
            </View>
         
        </Modal>
    )
}


