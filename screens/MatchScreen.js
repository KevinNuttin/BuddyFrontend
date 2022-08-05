import React from "react"
import { StyleSheet, Text, View, ImageBackground} from "react-native"


import Header2 from "../components/cards/Header2"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"


function MoodScreen(props) {

  var header = Header2(props)
  var message = OffsetMiniButton("Message", "DiscoverScreen", goDiscover)
  var swipe = OffsetMiniButton("swipe", "DiscoverScreen", goDiscover)

  function goDiscover(redirection){
    props.navigation.navigate(redirection); 
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <View style={styles.profils}>
        {ProfilPicture()}
        {ProfilPicture()}
        </View>

        <Text style={styles.text1}>I'ts a MATCH !</Text>
        <Text style={styles.text2}>With Sophie_Fonsec{"\n\n\n"}╰(*°▽°*)╯</Text>

        {message}
        {swipe}

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
    alignItems: 'center',
    justifyContent: 'center',
  },

  profils: {

    flexDirection: "row",
    marginTop: -40,
    marginBottom: -60,
  },

  text1: {

    fontWeight: "800",
    fontSize: 36,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",

  },

  text2: {

    fontWeight: "400",
    fontSize: 18,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
    marginBottom: 80,

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
