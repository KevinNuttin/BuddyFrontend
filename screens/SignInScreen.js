import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import Header from "../components/cards/Header"
import Input from "../components/buttons/Input"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function SignInScreen(props) {

    // En attendant le composant Input
    const [mail, setMail] = useState('');
    const [mdp, setMdp] = useState('');

    //var PseudoInput = Input("Username")
    //var PasswordInput = Input("Password")
    var header = Header("HomeScreen", props)
    var confirmer = OffsetMiniButton("Confirmer", "SearchGames",comfirmation)
    var tunnel = Tunnel(5)


//! ATTENTION bien modifier avec son IP

    async function comfirmation(redirection){
      props.navigation.navigate(redirection);}
      /*
      if(mail != null || mdp != null){
        const data = await fetch('http://172.20.10.3:3000/users/sign-in', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `&mail=${mail}&password=${mdp}`
        })
        const body = await data.json()
        console.log(body);
      if(body.result){
      props.navigation.navigate(redirection);} }
    }*/

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
        />

        <TextInput
        style={styles.input}
                onChangeText={(value) => setMdp(value)}
                value={mdp}
                keyboardType="default"
                secureTextEntry={true}
        />
        {/*{birthdayInput}*/}
        {confirmer}

        {tunnel}

      </View>
    </ImageBackground>
    
  );
}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  background: {

    height: "100%",

  },

  text: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",

  },

  input: {
    width : 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
},

});

export default SignInScreen