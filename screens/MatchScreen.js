import React from "react"
import { StyleSheet, Text, View, ImageBackground} from "react-native"

import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"

function MoodScreen(props) {

  var message = OffsetMiniButton("Message", "",props) // redirection à definir
  var swipe = OffsetMiniButton("swipe", "DiscoverScreen",props)

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      <View style={styles.container}>

        {ProfilPicture}

        <Text style={styles.text}>I'ts a match</Text>
        <Text style={styles.text}>With</Text>

        {message}
        {swipe}


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

});


export default MoodScreen
