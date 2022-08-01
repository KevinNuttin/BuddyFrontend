
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
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

//Creation of the Homescreen navigation with two buttons: sign-in, sign-up
function App(){
;

 
 return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />
      <Stack.Screen name="Pseudo" component={PseudoScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="Sign-in" component={SignInScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);
 }
{/*
//BirthdayScreen nav --> redirection to PseudoScreen
function BirthdayScreenFunction(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Pseudo')}
      />
    </View>
  );
 }

 //PseudoScreen nav --> redirection to EmailScreen
 function PseudoScreenFunction(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Email')}
      />
    </View>
  );
 } 

//EmailScreen nav --> redirection to PasswordScreen
 function EmailScreenFunction(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Password')}
      />
    </View>
  );
 } 

//PasswordScreen nav --> redirection to "On joue a quoi?"

*/}


 

export default App;








