import React from 'react'
import { StyleSheet, Text, View ,FlatList,Image,ScrollView} from 'react-native'
import ScreenDetails from '../../../constant/ScreenDetails'
import Colors from '../../../constant/Colors'
import Data from '../../../constant/ProductData'

export default function Products() {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        cardView:{
            width:screenDetails.isPotraite? screenDetails.width *0.4 :screenDetails.height*0.4 ,
            height: screenDetails.isPotraite? screenDetails.height *0.28: screenDetails.height*0.7 ,
            backgroundColor:Colors.white,
            margin:screenDetails.width *0.05,
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
            width:screenDetails.isPotraite? screenDetails.width *0.4-4 :screenDetails.height*0.4 -4,
            height: screenDetails.isPotraite? screenDetails.height *0.22: screenDetails.height*0.58-4 ,
            borderTopRightRadius:8 * screenDetails.unit,
            borderTopLeftRadius:10 * screenDetails.unit
        },
        title:{
          color:Colors.white,
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
        }
    })


      
    return (
        <View>
           
            <FlatList
            key={screenDetails.isPotraite?1:2}
                data={Data}
                listMode="SCROLLVIEW"
                numColumns={screenDetails.isPotraite?2:3}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem = {({item}) => {
                    return <View style={styles.cardView}>
                        <Image  style={styles.image} source={{uri:item.url}}/>
                        <View  style={styles.textView}>
                            <Text  style={styles.title}>{item.title}</Text>
                        </View>
                        <Text style={styles.price}>{"Price:"+item.price+" ₹"}</Text>
                    </View>
                }}
            />
        </View>
    )
}

