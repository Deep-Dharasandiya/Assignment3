import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignIn from './screens/authentication/SignIn' 

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}


