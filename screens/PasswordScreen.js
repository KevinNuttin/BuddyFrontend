import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import backIcon from "../components/icons/BackIcon"
import Input from "../components/buttons/Input"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

import { connect } from 'react-redux';


function PasswordScreen(props) {



  // En attendant le composant Input
  const [text, setText] = useState(props.user.mdp);

  //var passwordInput = Input("password")
  var retour = backIcon("EmailScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "SearchGames",comfirmation)
  var tunnel = Tunnel(5)

  async function comfirmation(redirection){
    if(text != null){
      var birthday = new Date("2015-03-26");
      const data = await fetch('http://172.20.10.3:3000/users/sign-up', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `pseudo=${props.user.pseudo}&mail=${props.user.mail}&password=${text}&birthday=${props.user.age}&min=${18}&max=${35}`
      })
      const body = await data.json()
      console.log(body);
  
    props.onConfirmer(text,)
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

        <Text style={styles.text}>Ton mot de passe</Text>

        {/* A remplacer par le composant Input*/}
        <TextInput
        style={styles.input}
                onChangeText={(value) => setText(value)}
                value={text}
                keyboardType="default"
                secureTextEntry={true}
        />
        {/*{passwordInput}*/}
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

  marginRight : 300,
  marginTop : 30
  
},

});


function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (password) {
      dispatch({ type: 'addMdp', mdp : password  })
    }
  }
}

function mapStateToProps(state) {
  return { user : state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordScreen);


