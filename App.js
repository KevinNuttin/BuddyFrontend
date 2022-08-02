
import React from 'react';


import HomeScreen from './screens/HomeScreen';
import EmailScreen from './screens/EmailScreen';
import PasswordScreen from './screens/PasswordScreen';
import SignInScreen from './screens/SignInScreen';
import PseudoScreen from './screens/PseudoScreen';
import BirthdayScreen from './screens/BirthdayScreen';


import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

//Creation of the Homescreen navigation with two buttons: sign-in, sign-up
function App(){
;

 
 return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />
      <Stack.Screen name="PseudoScreen" component={PseudoScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);
 }


 
export default App;





