import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/components/Cadastro/index';
import Login from './src/components/Login/index';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} screenOptions={{header: {headerShown: false}}}/>
      <Stack.Screen name='Cadastro' component={Cadastro} screenOptions={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {

  return(
    <NavigationContainer>
      <StatusBar hidden/>
      <MyStack/>
    </NavigationContainer>
  );
  
  
}

