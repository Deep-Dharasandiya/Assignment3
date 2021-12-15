import React from "react";
import {StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from "../constant/Colors";
import ScreenDetails from "../constant/ScreenDetails";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Drawer from "./Drawer";
import Profile from "../screens/bottomTab/Profile";
import Setting from "../screens/bottomTab/Setting";

export default function BottomTabNavigation() {
    return (
      <Tab.Navigator
      initialRouteName="home"
      tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen name="home" component={Drawer} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
    )
}


function MyTabBar({state, descriptors, navigation}) {
  const screenDetails=ScreenDetails();
    const styles = StyleSheet.create({
      tabBar:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor:Colors.blurblue,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
      },
      activeTabButton:{
        alignItems: 'center',
        justifyContent:'center',
        height:60,
        width:60,
        borderRadius:30,
        marginBottom:10,
        backgroundColor:Colors.blurblue
      }
    })
  return (
    <View style={styles.tabBar}>

      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon = {
          Profile: 'person-circle-outline',
          home: 'home',
          Setting: 'settings-sharp',
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>

            <View style={{ alignItems: 'center'}}>
              {
                !isFocused?
                  <Icon
                    name={icon[label.replace(' ', '')]}
                    color={isFocused ? '#78C0F0' : 'black'}
                    size={25}
                  />
                  :
                  <View style={styles.activeTabButton}>
                      <Icon
                    name={icon[label.replace(' ', '')]}
                    color={isFocused ? '#78C0F0' : 'black'}
                    size={25}
                  />
                    </View>
              }
              
              
              {/* <Text
                style={{
                  color: isFocused ? '#78C0F0' : '#222',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                {label}
              </Text> */}
              
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}