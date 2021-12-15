import React from 'react'
import { StyleSheet, Text, View ,FlatList,Image,Animated} from 'react-native'
import ScreenDetails from '../constant/ScreenDetails'
import Colors from '../constant/Colors'

export default function CarouselSlider(props) {
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        cardView:{
            width:screenDetails.isPotraite?screenDetails.width *0.9 :screenDetails.width *0.6,
            height: screenDetails.width ? screenDetails.height *0.28 :screenDetails.height *0.6,
            backgroundColor:Colors.white,
           // marginRight:screenDetails.isPotraite?50:0,
            marginHorizontal:screenDetails.isPotraite?screenDetails.width *0.05:screenDetails.width*0.1,
            borderRadius: 10 * screenDetails.unit,

        },
        textView:{
            position:'absolute',
            bottom:10,
            margin:10,
            left:5
        },
        image:{
            width:screenDetails.isPotraite?screenDetails.width *0.9 :screenDetails.width *0.6,
            height: screenDetails.width ? screenDetails.height *0.28 :screenDetails.height *0.6,
            borderRadius:10,
        },
        title:{
          color:Colors.white,
          fontSize:20,
        },
        description:{
            color:Colors.white
        },
        dotView:{
            flexDirection:'row',
            justifyContent:'center',
        }
    })

    const [dataList , setDataList] = React.useState(props.data)

    const scrollX=new Animated.Value(0);
    let position=Animated.divide(scrollX,screenDetails.width)
    let flatList;
    React.useEffect(()=>{
        setDataList(props.data)
       // infiniteScroll(dataList);
    },[])
    function infiniteScroll(data){
        const numberOfData =data.length;
        let scrollValue=0,scrolled=0;
        

        setInterval(function(){
            const numberOfData =dataList.length;
            scrolled= scrolled+1;
            console.log(scrolled);
            if(scrolled < numberOfData){
                scrollValue=scrollValue+ screenDetails.width
            }else{
                scrollValue=0;
                scrolled=0;
            }
            this.flatList.scrollToOffset({Animated:true,offset:scrollValue})
           
        },3000)

    }
   
    return (
       <View>
           {
              ((props.data).lengnth != 0 ) &&(
                  <View>
                   <Animated.FlatList
                        ref={(flatList)=>{this.flatList = flatList}}
                        data={props.data}
                        keyExtractor = {(item,index) => 'key'+index}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment = 'center'
                        scrollEventThrottle ={16}
                        decelerationRate ='fast'
                        showsHorizontalScrollIndicator={false}
                        renderItem = {({item}) => {
                            return <View style={styles.cardView}>
                                <Image  style={styles.image} source={{uri:item.url}}/>
                                <View  style={styles.textView}>
                                    <Text  style={styles.title}>{item.title}</Text>
                                    <Text  style={styles.description}>{item.description}</Text>
                                </View>
                            </View>
                        }}
                        onScroll={Animated.event(
                           
                            [{nativeEvent:{contentOffset:{x:scrollX}}}],
                            {useNativeDriver: false}
                            
                        )}
                    />
                    <View style={styles.dotView}>
                        {(props.data).map((_,i) => {
                            let opacity=position.interpolate({
                                inputRange:[i -1 , i , i + 1],
                                outputRange:[0.3 , 1 , 0.3],
                                extrapolate:'clamp'
                            })
                            return (
                                <Animated.View
                                    key={i}
                                    style={{opacity,height:10,width:10,backgroundColor:Colors.black,margin:8,borderRadius:5}}
                                />

                            )
                        })}

                    </View>
                </View>
               )
           }
       </View>
    )
}


