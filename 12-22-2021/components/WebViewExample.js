import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {WebView} from 'react-native-webview'

const WebViewExample = () => {
    return (
        <SafeAreaView style = {{flex:1}}>
            <WebView
             source = {{url:'https://longdo.com/main/'}}
             style = {{marginTop : 20}}

            />

        </SafeAreaView>
    )
}

export default WebViewExample