import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import AboutScreen from "./screens/AboutScreen";
const Stact = createNativeStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#135790',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreens} 
        options={{title:'หน้าหลัก'}}/>
        <Stack.Screen name="About" component={AboutScreen} 
        options={{title:'เกี่ยวกับ'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
