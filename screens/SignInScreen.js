import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import Header from "../components/cards/Header"
import Input from "../components/buttons/Input"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import AsyncStorage from '@react-native-async-storage/async-storage';


function SignInScreen(props) {

    // En attendant le composant Input
    const [mail, setMail] = useState('');
    const [mdp, setMdp] = useState('');

    //var PseudoInput = Input("Username")
    //var PasswordInput = Input("Password")
    var header = Header("HomeScreen", props)
    var confirmer = OffsetMiniButton("Confirmer", "SearchGames", comfirmation)

//! ATTENTION bien modifier avec son IP

    async function comfirmation(redirection){
      if(mail != null || mdp != null){
        const data = await fetch('http://192.168.10.169:3000/users/sign-in', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `&mail=${mail}&password=${mdp}`
        })
        const body = await data.json()
        console.log(body);

      let getUser = body.user.token   
      console.log("getUser",getUser);
      AsyncStorage.setItem('users', getUser)

      if(body.result){
      props.navigation.navigate(redirection);} }

     // props.navigation.navigate(redirection);
      
    }
      

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Connexion</Text>

        {/* A remplacer par le composant Input*/}
        <TextInput
        style={styles.input}
                onChangeText={(value) => setMail(value)}
                value={mail}
                keyboardType="default"
                placeholder="Ton Email"
        />

        <TextInput
        style={styles.input}
                onChangeText={(value) => setMdp(value)}
                value={mdp}
                keyboardType="default"
                secureTextEntry={true}
                placeholder="Ton mot de passe"
        />
        {/*{birthdayInput}*/}
        {confirmer}

      </View>
    </ImageBackground>
    
  );
}


const styles = StyleSheet.create({

  background: {

    height: "100%",
  },

  container: {

    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {

    marginTop: 20,
    marginBottom: 140,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

  input: {

    width : 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: -20,
    marginBottom: 60,
},

});

export default SignInScreen