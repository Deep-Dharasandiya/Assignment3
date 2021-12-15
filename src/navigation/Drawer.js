import React from 'react';
import {StyleSheet ,View, TouchableOpacity, Text ,SafeAreaView} from 'react-native';
import Colors from '../constant/Colors';
import Logo from '../components/Logo';
import ScreenDetails from '../constant/ScreenDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
const drawer = createDrawerNavigator();

import Home from '../screens/bottomTab/Home';
import Cart from '../screens/bottomTab/Drawer/Cart';
import Products from '../screens/bottomTab/Drawer/Products';
import Orders from '../screens/bottomTab/Drawer/Orders';


export default function Drawer(props) {
    const screenDetails=ScreenDetails();
    return (
        <drawer.Navigator 
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShoen:false,
                drawerActiveBackgroundColor:Colors.blurblue,
                drawerActiveTintColor:Colors.lightblue,
                drawerInactiveTintColor:Colors.black,
                drawerLabelStyle:{
                    marginLeft:-20 * screenDetails.unit,
                    fontSize:15* screenDetails.unit,
                }
            }}
        >
            <drawer.Screen 
                name="Home" 
                component={Home} 
                options={{
                    drawerIcon: ({color}) =>(
                        <Icon
                        name='home'
                        color={color}
                        size={22* screenDetails.unit}
                      />
                    )
                }}
            />
            <drawer.Screen 
                name="Products" 
                component={Products}
                options={{
                    drawerIcon: ({color}) =>(
                        <Icon
                        name='albums-sharp'
                        color={color}
                        size={22* screenDetails.unit}
                      />
                    )
                }}
             />
            <drawer.Screen 
                name="Cart" 
                component={Cart}
                options={{
                    drawerIcon: ({color}) =>(
                        <Icon
                        name='cart'
                        color={color}
                        size={22* screenDetails.unit}
                      />
                    )
                }}
             />
             <drawer.Screen 
                name="Orders" 
                component={Orders}
                options={{
                    drawerIcon: ({color}) =>(
                        <Icon
                        name='ios-reader'
                        color={color}
                        size={22* screenDetails.unit}
                      />
                    )
                }}
             />
            
        </drawer.Navigator>
    )
}

function CustomDrawer(props){
    const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
        logoView:{
            flex:1,
            height:screenDetails.isPotraite?180*screenDetails.unit:80*screenDetails.unit,
            backgroundColor:Colors.blurblue,
            alignItems:'center',justifyContent:'center'
        },
        logoutView:{
            marginBottom:screenDetails.isPotraite?50*screenDetails.
            unit:20*screenDetails.unit,
            marginTop:15,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row'
        },
        logoutText:{
            marginLeft:10,
            fontSize:20,
            color:Colors.lightblue,
            fontWeight:'600'
        }
    })
    function onLogout(){
        props.navigation.popToTop();
    }
    return(
        <View style={{flex:1}}>
           <DrawerContentScrollView 
            {...props}
            >
                <View style={styles.logoView}>
                <Logo
                        position={screenDetails.isPotraite?"Vertical":'Horizontal'}
                        height={screenDetails.isPotraite?80 * screenDetails.unit:60 * screenDetails.unit}
                />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity 
                style={styles.logoutView}
                onPress={onLogout}>
             
                    <Icon
                        name='exit'
                        color={Colors.lightblue}
                        size={25}
                      />
                     <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

