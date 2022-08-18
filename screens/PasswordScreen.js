import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "../components/cards/Header"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"
import { connect } from 'react-redux';

// Page du choix de MDP du user

function PasswordScreen(props) {

  const [text, setText] = useState(props.user.mdp);
  const [listErrorsSignup, setErrorsSignup] = useState([]) //! A utiliser pour les erreurs d'incriptions
  var header = Header("EmailScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "SearchGames", comfirmation)
  var tunnel = Tunnel(4)

  async function comfirmation(redirection){ 
    if(text != null){ //  verifie l'entrée d'un MDP
      const data = await fetch('http://192.168.1.21:3000/users/sign-up', { // creation de l'utilisateur
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `pseudo=${props.user.pseudo}&mail=${props.user.mail}&password=${text}&birthday=${props.user.age}&min=${18}&max=${35}`
      })
      const body = await data.json()

    if(body.result === true){ // si la creation a eu lieu on sauvegarde le token dans le store et en AsyncStorage puis on navigue à la page suivante
      props.addToken(body.user.token)
      let getUser = body.user.token
      AsyncStorage.setItem('users', getUser)
      props.navigation.navigate(redirection)

    } else {
      setErrorsSignup(body.user.error)
    }
    props.onConfirmer(text) // sauvegarde du MDP dans le store
    if(body.result){
    props.navigation.navigate(redirection);} }
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ton mot de passe</Text>

        {/* A remplacer par le composant Input*/}
        <TextInput
        style={styles.input}
                onChangeText={(value) => setText(value)}
                value={text}
                keyboardType="default"
                secureTextEntry={true}
                placeholder="Tu y es presque..."
        />
        {/*{passwordInput}*/}
        {confirmer}

       {tunnel}
          
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

    marginTop: 100,
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
    marginBottom: 60,
},

});

//syntaxe pour le redux
function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (password) {
      dispatch({ type: 'addMdp', mdp : password}) // sauvegarde dans le store du MDP
      },
      addToken: function (token) {
        dispatch({ type: 'addToken', token: token}) // sauvegarde dans le store du token
        }
    }
  }

function mapStateToProps(state) {
  return { user : state,}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordScreen);


