import React from 'react';
//import TextInputReview from './components/TextInputReview';
import ImageWithTextInput from './components/ImageWithTextInput';
import { StyleSheet,Text,View,SafeAreaView,Button } from 'react-native';
const ButtonExample=() =>{
    const onPressAlert=()=>{
        alert('Hello');
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <view style={styles.container}>
                <text>Button Example</text>
                <button
                  onPress={onPressAlert}
                  title= "Click Me"
                  color= "#84158"
                  />
            </view>
        </SafeAreaView> 
    )
}

export default ButtonExample
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
});