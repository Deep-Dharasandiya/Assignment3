import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default function PrivacyPolicy() {
    const uri = `https://www.google.com/`;
    return (
       
            <WebView source={{ uri: uri }} />
    )
}

const styles = StyleSheet.create({})
