import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import ButtonLeft from "../components/buttons/ButtonLeft"
import ButtonRight from "../components/buttons/ButtonRight"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Page de selection des langues

function LanguageScreen(props) {

  const [selected1, setSelected1] = useState(false) // Renvoi à la bonne selection du bouton
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const [selected4, setSelected4] = useState(false)
  const [selected5, setSelected5] = useState(false)
  const [selected6, setSelected6] = useState(false)

  const [languageSelected, setLanguageSelected] = useState([]) // Liste des langues selectionées

  // Ici on parametre les composants importés
  var header = Header("PlatformScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "DiscoverScreen", goGames)
  var tunnel = Tunnel(4)

  var token = ""

  //* récupération du token du users pour pouvoir ajouter sa liste de jeux à son profil 
  AsyncStorage.getItem("users", function(error, data) {
    console.log(data);
    token = data
   });

  async function goGames(redirection){  // Envoi de la liste des langues au back 
    props.navigation.navigate(redirection); 

    const data = await fetch('http://192.168.1.21:3000/users/langues', {
    method: "PUT",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `plateforme=${JSON.stringify(languageSelected)}&token=${token}`,
    })
  } 

  var chooseLanguageFR = (platformName) => {  // Enregistre la langue selectionnée dans l'état et la retire au second click
    setSelected1(platformName)

    if(platformName) {
      setLanguageSelected([...languageSelected, "62e912ebe5b469d3b50d0fb5"])
    } else {
      setLanguageSelected([...languageSelected.filter(id => id !== "62e912ebe5b469d3b50d0fb5")])
      }
  }

  var chooseLanguageDE = (platformName) => {
    setSelected2(platformName)

    if(platformName) {
      setLanguageSelected([...languageSelected, "62e9133b055dd925b46eb751"])
    } else {
      setLanguageSelected([...languageSelected.filter(id => id !== "62e9133b055dd925b46eb751")])
      }
  }

  var chooseLanguageCO = (platformName) => {
    setSelected3(platformName)

    if(platformName) {
      setLanguageSelected([...languageSelected,"62e9138f055dd925b46eb755"])
    } else {
      setLanguageSelected([...languageSelected.filter(id => id !== "62e9138f055dd925b46eb755")])
      }
  }

  var chooseLanguageEN = (platformName) => {
    setSelected4(platformName)

    if(platformName) {
      setLanguageSelected([...languageSelected,"62e91303055dd925b46eb74f"])
    } else {
      setLanguageSelected([...languageSelected.filter(id => id !== "62e91303055dd925b46eb74f")])
      }
  }

  var chooseLanguageES = (platformName) => {
    setSelected5(platformName)

    if(platformName) {
      setLanguageSelected([...languageSelected,"62e91365055dd925b46eb753"])
    } else {
      setLanguageSelected([...languageSelected.filter(id => id !== "62e91365055dd925b46eb753")])
      }
  }

  var chooseLanguageJP = (platformName) => {
    setSelected6(platformName)

    if(platformName) {
      setLanguageSelected([...languageSelected,"62e9138f055dd925b46eb757"])
    } else {
      setLanguageSelected([...languageSelected.filter(id => id !== "62e9138f055dd925b46eb757")])
      }
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>On communique en...</Text>

          <View style={styles.buttons}>
            <ButtonLeft title="Français" selected1={selected1} handleClickChoosePlatformParent={chooseLanguageFR} />
            <ButtonRight title="English" selected4={selected4} handleClickChoosePlatformParent={chooseLanguageEN} />
            <ButtonLeft title="Deutsch" selected2={selected2} handleClickChoosePlatformParent={chooseLanguageDE} />
            <ButtonRight title="Espagnol" selected5={selected5} handleClickChoosePlatformParent={chooseLanguageES} />
            <ButtonLeft title="조선말" selected3={selected3} handleClickChoosePlatformParent={chooseLanguageCO} />
            <ButtonRight title="日本語" selected6={selected6} handleClickChoosePlatformParent={chooseLanguageJP} />
          </View>
        
        {confirmer}

        {tunnel}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    flexDirection: "column",
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

  buttons: {

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
    marginTop: -10,
    marginBottom: 250,
  }

});


export default LanguageScreen
