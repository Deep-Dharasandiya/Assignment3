import React from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity ,Image} from 'react-native'
import Colors from '../../constant/Colors'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MediaSelection from '../../components/MediaSelection';
import ScreenDetails from '../../constant/ScreenDetails';
import { TextInput } from 'react-native-gesture-handler';
export default function Profile() {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:Colors.lightblue,
            alignItems:'center'
        },
        card:{
           backgroundColor:Colors.white,
           width:screenDetails.isPotraite? screenDetails.width *0.9:screenDetails.width *0.45,
           borderRadius:20 * screenDetails.unit,
           padding:10 * screenDetails.unit
        },
        header:{
           flexDirection:'row',
           alignItems:'center',
        },
        image:{
            height:120 *screenDetails.unit,
            width: 100 * screenDetails.unit,
            borderRadius: 10* screenDetails.unit,
            borderColor:Colors.lightblue,
            borderWidth: 2 * screenDetails.unit,
          },
          imgstyle:{
              alignSelf:'center',
              justifyContent:'center',
              height:116 *screenDetails.unit,
              width: 96 * screenDetails.unit,
              borderRadius: 9* screenDetails.unit,
          },
          nameView:{
              flex:1,
             alignItems:'center',
             justifyContent:'center'
          },
          name:{
            textAlign:'center',
            fontSize:25 * screenDetails.unit,
            fontWeight:'600',
            color:Colors.black,
            padding:0
          },
          subTitle:{
              marginTop:10 * screenDetails.unit,
            fontSize:18 * screenDetails.unit,
            fontWeight:'500'
          },
          text:{
            fontSize:15 * screenDetails.unit,
          },
          scrollView:{
            flexGrow:1,
            width:screenDetails.isPotraite? screenDetails.width*0.9:screenDetails.width*0.5,
            alignItems:'center',
            justifyContent:'center'
        },

    })
    const [profieImageUri, setprofieImageUri] =React.useState('https://picsum.photos/id/12/200/300');
    const [isMediaSelection , setMediaSelection] = React.useState(false);
    const [firstName , setFirstName] = React.useState('Deep');
    const [lastName , setLastName] = React.useState('Dharasandiya');
    const mediyaselectionType = [
        {
            value: 'From Camera',
        }, {
            value: 'From Gellary',
        },];
    function onChangeMediaSelection(media){
        onHandleMediaSelection(false);
       if(media =='From Camera'){
         onChangeCameraImage();
       }else{
        onChangeGelleryImage();
       }
    }

    function onHandleMediaSelection(flag){
        setMediaSelection(flag)
    }

    const options = {
        storageOptions: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: false,
      };

    function onChangeCameraImage(){
        launchCamera(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                if(response.hasOwnProperty('assets')){
                    setprofieImageUri(response.assets[0]['uri']);
                }
            }
          });
    }
    function onChangeGelleryImage(){
        launchImageLibrary(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                if(response.hasOwnProperty('assets')){
                    setprofieImageUri(response.assets[0]['uri']);
                }
           
            }
            });
        
    }
    return (
        <View style={styles.container}>
               <ScrollView
                contentContainerStyle={styles.scrollView}>
                    <View style={styles.card}>
                   <View style={styles.header}>
                        <TouchableOpacity
                            onPress={ ()=>{onHandleMediaSelection(true)}}>
                            <View style={styles.image}>
                                {profieImageUri != '' && (
                                <Image
                                    source={{uri:profieImageUri}}
                                    style={styles.imgstyle} />
                                )}
                            </View>
                            <MediaSelection
                            lable="Select Media:"
                            data={mediyaselectionType}
                            fn={onChangeMediaSelection}
                            isVisible={isMediaSelection}
                            fn2={onHandleMediaSelection}
                        />
                        </TouchableOpacity>
                        <View style={styles.nameView}>
                            <TextInput
                               style={styles.name}
                                keyboardType='default'
                                placeholder={firstName}
                                fontSize={25 * screenDetails.unit}
                                placeholderTextColor={Colors.black}
                                onChangeText={text => setFirstName(text)}
                                defaultValue={firstName}
                            />
                            <TextInput
                               style={styles.name}
                                keyboardType='default'
                                placeholder={lastName}
                                fontSize={25 * screenDetails.unit}
                                placeholderTextColor={Colors.black}
                                onChangeText={text => setLastName(text)}
                                defaultValue={lastName}
                            />
                            </View>
                    </View>
                   <Text style={styles.subTitle}>User Name:</Text>
                   <Text style={styles.text}>deepdharasandiya</Text>
                   <Text style={styles.subTitle}>Email:</Text>
                   <Text style={styles.text}>deep@gmail.com</Text>
                 </View>
                </ScrollView>
            
        </View>
    )
}


