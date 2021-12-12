import react from 'react';
import AsyncStorage from '@react-native-community/async-storage'

export async function setValue(key , value){
  let isdone=true;
    try {
        await AsyncStorage.setItem(key , JSON.stringify(value) );
      } catch (error) {
       isdone= false;
      }
      return isdone;
}

export async function getValue(key){
  AsyncStorage.getItem(key).then((value) => {
    return value
})
  // try {
  //   // const value = await AsyncStorage.getItem(key);
  //   // console.log(await value);
  //   return await AsyncStorage.getItem(key);
  // } catch (error) {
  //   return false
  // }
}