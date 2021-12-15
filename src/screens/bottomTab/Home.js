import React from 'react'
import { StyleSheet, Text, View ,FlatList,Image,ScrollView} from 'react-native'
import ScreenDetails from '../../constant/ScreenDetails'
import Colors from '../../constant/Colors'
import CarouselSlider from '../../components/CarouselSlider'
import Data from '../../constant/ProductData'
import { color } from 'react-native-reanimated'

export default function Home() {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        cardView:{
            width:screenDetails.isPotraite? screenDetails.width *0.4 :screenDetails.height*0.4 ,
            height: screenDetails.isPotraite? screenDetails.height *0.28: screenDetails.height*0.7 ,
            backgroundColor:Colors.white,
            margin:screenDetails.width *0.05,
            borderRadius: 10 * screenDetails.unit,

        },
        textView:{
            position:'absolute',
            bottom:10 * screenDetails.unit,
            margin:10  * screenDetails.unit,
            left:5 * screenDetails.unit
        },
        image:{
            width:screenDetails.isPotraite? screenDetails.width *0.4 :screenDetails.height*0.4 ,
            height: screenDetails.isPotraite? screenDetails.height *0.28: screenDetails.height*0.7 ,
            borderRadius:10 * screenDetails.unit,
        },
        title:{
          color:Colors.white,
          fontSize:25 * screenDetails.unit,
          fontWeight:'700'
        },
        description:{
            color:Colors.white
        },
        dotView:{
            flexDirection:'row',
            justifyContent:'center',
        }
    })

    carouselData=[
        {
          title: "Aenean leo",
          description: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
          url: "https://picsum.photos/id/11/200/300"
        },
        {
          title: "In turpis",
          description: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
          url: "https://picsum.photos/id/10/200/300"
        },
        {
          title: "Lorem Ipsum",
          description: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
          url: "https://picsum.photos/id/12/200/300"
        }
      ]
      
    return (
        <View>
           
            <FlatList
            key={screenDetails.isPotraite?1:2}
                data={Data}
                listMode="SCROLLVIEW"
                numColumns={screenDetails.isPotraite?2:3}
                keyExtractor={(item, index) => `key-${index}`}
                ListHeaderComponent={() => (
                    <CarouselSlider 
                    data={carouselData}
                    />
                  )}
                renderItem = {({item}) => {
                    return <View style={styles.cardView}>
                        <Image  style={styles.image} source={{uri:item.url}}/>
                        <View  style={styles.textView}>
                            <Text  style={styles.title}>{item.title}</Text>
                        </View>
                    </View>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
