import React from 'react'
import { StyleSheet, Text, View ,FlatList,Image,ScrollView} from 'react-native'
import ScreenDetails from '../../../constant/ScreenDetails'
import Colors from '../../../constant/Colors'
import Data from '../../../constant/ProductData'

export default function Orders() {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        cardView:{
            width:screenDetails.isPotraite? screenDetails.width *0.9:screenDetails.width*0.8,
            height: screenDetails.isPotraite? screenDetails.height *0.13: screenDetails.height*0.45 ,
            backgroundColor:Colors.white,
            marginHorizontal:screenDetails.width *0.05,
            marginVertical:screenDetails.width *0.01,
            padding:10 * screenDetails.unit,
            borderRadius: 10 * screenDetails.unit,
            borderColor:Colors.black,
            borderWidth:2 * screenDetails.unit,

        },
        textView:{
            position:'absolute',
            bottom:screenDetails.isPotraite? screenDetails.height *0.06: screenDetails.height*0.15-4 ,
            margin:10 * screenDetails.unit,
            left:5 * screenDetails.unit
        },
        image:{
            width:screenDetails.isPotraite? screenDetails.width *0.3 :screenDetails.height*0.3,
            height: screenDetails.isPotraite? screenDetails.height *0.1: screenDetails.height*0.35 ,
            borderRadius:10 * screenDetails.unit
        },
        title:{
          color:Colors.black,
          fontSize:25 * screenDetails.unit,
          fontWeight:'700'
        },
        description:{
            color:Colors.white
        },
        price:{
            textAlign:'center',
            fontSize:20 * screenDetails.unit,
            fontWeight:'600',
            marginTop:5 * screenDetails.unit,
        },
        subTitle:{
            marginTop:10 * screenDetails.unit,
          fontSize:18 * screenDetails.unit,
          fontWeight:'500'
        },
        text:{
          fontSize:18 * screenDetails.unit,
        },
    })


      
    return (
        <View>
           
            <FlatList
            key={screenDetails.isPotraite?1:2}
                data={Data}
                listMode="SCROLLVIEW"
                numColumns={1}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem = {({item}) => {
                    return <View style={styles.cardView}>
                        <View style={{flexDirection:'row'}}>
                            <Image  style={styles.image} source={{uri:item.url}}/>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Text  style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>{"Price:"+item.price+" ₹"}</Text>
                            </View>
                         </View>
                    </View>
                }}
            />
        </View>
    )
}

