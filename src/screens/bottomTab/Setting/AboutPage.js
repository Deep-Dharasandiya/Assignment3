import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutPage() {
    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        text:{
            fontSize:30,
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Page</Text>
        </View>
    )
}


