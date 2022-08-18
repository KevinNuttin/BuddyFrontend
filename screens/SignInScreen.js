import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import Header from "../components/cards/Header"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';

// page de connexion

function SignInScreen(props) {

 
    const [mail, setMail] = useState('');
    const [mdp, setMdp] = useState('');


    var header = Header("HomeScreen", props)
    var confirmer = OffsetMiniButton("Confirmer", "SearchGames", comfirmation)

//! ATTENTION bien modifier avec son IP

    async function comfirmation(redirection){
      if(mail != null || mdp != null){ // vérification que le mail ou le mdp ne sont pas null
        const data = await fetch('http://192.168.1.21:3000/users/sign-in', { // requete au back pour connecter le user
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `&mail=${mail}&password=${mdp}`
        })
        const body = await data.json()
   
      if(body.result){  // si le resultat est correcte on redirige l'utilisateur et on stock son token
        props.onConfirmer(body.user.pseudo);
        let getUser = body.token   
        AsyncStorage.setItem('users', getUser)
        props.navigation.navigate(redirection);} }      
    }
      

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Connexion</Text>


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

    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {

    marginTop: 120,
    marginBottom: 160,

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



//syntax du redux
function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (pseudo) {
      dispatch({ type: 'addPseudo', pseudo : pseudo  }) // sauvegarde du pseudo dans le store
    }
  }
}



export default connect(
  null,
  mapDispatchToProps
)(SignInScreen);
