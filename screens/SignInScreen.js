import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import backIcon from "../components/icons/BackIcon"
import Input from "../components/buttons/Input"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function SignInScreen(props) {

    // En attendant le composant Input
    const [mail, setMail] = useState('');
    const [mdp, setMdp] = useState('');

    //var PseudoInput = Input("Username")
    //var PasswordInput = Input("Password")
    var retour = backIcon("HomeScreen", props)
    var confirmer = OffsetMiniButton("Confirmer", "SearchGames",comfirmation)
    var tunnel = Tunnel(5)

    async function comfirmation(redirection){
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
    }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

<View style={styles.header}>
      {retour}
      </View>

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

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  text: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,

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
    marginBottom: 20,
},
header: {

  marginRight : 30,
  marginTop : 30
  
},

});

export default SignInScreen