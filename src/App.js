import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignIn from './screens/authentication/SignIn' 
import SignUpStep1 from './screens/authentication/SignUpStep1';
import SignUpStep2 from './screens/authentication/SignUpStep2';
import SignUpStep3 from './screens/authentication/SignUpStep3';
import ForGotPassword1 from './screens/authentication/ForGotPassword/ForGotPassword1';
import ForGotPassword2 from './screens/authentication/ForGotPassword/ForGotPassword2';
import ForGotPassword3 from './screens/authentication/ForGotPassword/ForGotPassword3';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpStep1" component={SignUpStep1} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpStep2" component={SignUpStep2} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpStep3" component={SignUpStep3} options={{headerShown: false}}/>
        <Stack.Screen name="ForGotPassword1" component={ForGotPassword1} options={{headerShown: false}}/>
        <Stack.Screen name="ForGotPassword2" component={ForGotPassword2} options={{headerShown: false}}/>
        <Stack.Screen name="ForGotPassword3" component={ForGotPassword3} options={{headerShown: false}}/>
  
      </Stack.Navigator>
    </NavigationContainer>
  )
}


