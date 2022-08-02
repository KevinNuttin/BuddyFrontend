
import React from 'react';
import 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';
import EmailScreen from './screens/EmailScreen';
import PasswordScreen from './screens/PasswordScreen';
import SignInScreen from './screens/SignInScreen';
import PseudoScreen from './screens/PseudoScreen';
import BirthdayScreen from './screens/BirthdayScreen';
import searchGames from './screens/SearchGames';

import DiscoverScreen from './screens/DiscoverScreen';
import AgeScreen from './screens/AgeScreen';
import ProfilScreen from './screens/ProfilScreen';
import PlatformScreen from './screens/PlatformScreen';
import MoodScreen from './screens/MoodScreen';
import MatchScreen from './screens/MatchScreen';
import LanguageScreen from './screens/LanguageScreen';



import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

//Creation of the Homescreen navigation with two buttons: sign-in, sign-up
function App(){
;

 
 return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />
      <Stack.Screen name="PseudoScreen" component={PseudoScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen}/>
      <Stack.Screen name="SearchGames" component={searchGames}/>
      

      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <Stack.Screen name="AgeScreen" component={AgeScreen} />
      <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
      <Stack.Screen name="PlatformScreen" component={PlatformScreen}/>
      <Stack.Screen name="MoodScreen" component={MoodScreen}/>
      <Stack.Screen name="MatchScreen" component={MatchScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
     

    </Stack.Navigator>
  </NavigationContainer>
);
 }


 
export default App;





