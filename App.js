import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


import BirthdayScreen from './screens/BirthdayScreen';
import HomeScreen from './screens/HomeScreen';
import EmailScreen from './screens/EmailScreen';
import PasswordScreen from './screens/PasswordScreen';
import SignInScreen from './screens/SignInScreen';
import PseudoScreen from './screens/PseudoScreen';

//Creation of the Homescreen navigation with two buttons: sign-in, sign-up
function HomeScreen(props) {
 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e67e22'}}>
{/*sign-up button which redirects to the birthday screen*/}
     <Button title="Sign-Up"
       onPress={() => props.navigation.navigate('Birthday')}
     />
{/* sign-in button wich redirects to the signin screen*/}
 <Button title="Sign-In"
       onPress={() => props.navigation.navigate('SignIn')}
     />
   </View>


  
 );
}

//BirthdayScreen nav --> redirection to PseudoScreen
function BirthdayScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Pseudo')}
      />
    </View>
  );
 }

 //PseudoScreen nav --> redirection to EmailScreen
 function PseudoScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Email')}
      />
    </View>
  );
 } 

//EmailScreen nav --> redirection to PasswordScreen
 function EmailScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Password')}
      />
    </View>
  );
 } 

//PasswordScreen nav --> redirection to "On joue a quoi?"



const Stack = createStackNavigator();


function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Birthday" component={BirthdayScreen} />
       <Stack.Screen name="Pseudo" component={PseudoScreen} />
       <Stack.Screen name="Email" component={EmailScreen} />
       <Stack.Screen name="Password" component={PasswordScreen} />
       <Stack.Screen name="Sign-in" component={SignInScreen} />

     </Stack.Navigator>
   </NavigationContainer>
);
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

