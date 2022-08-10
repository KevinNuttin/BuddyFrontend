import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import ButtonLeft from "../components/buttons/ButtonLeft"
import ButtonRight from "../components/buttons/ButtonRight"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"
import AsyncStorage from '@react-native-async-storage/async-storage';

function LanguageScreen(props) {

  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const [selected4, setSelected4] = useState(false)
  const [selected5, setSelected5] = useState(false)
  const [selected6, setSelected6] = useState(false)

  const [platformSelected, setPlatformSelected] = useState([])
  const [languageSelected1, setLanguageSelected1] = useState("62e9529a0864ccd30790346a")
  const [languageSelected2, setLanguageSelected2] = useState("62e9529a0864ccd30790346a")
  const [languageSelected3, setLanguageSelected3] = useState("62e9529a0864ccd30790346a")
  const [languageSelected4, setLanguageSelected4] = useState("62e9529a0864ccd30790346a")
  const [languageSelected5, setLanguageSelected5] = useState("62e9529a0864ccd30790346a")
  const [languageSelected6, setLanguageSelected6] = useState("62e9529a0864ccd30790346a")

  var header = Header("PlatformScreen", props)
  // var FR = ButtonLeft("Français")
  // var DE = ButtonLeft("Deutsch")
  // var CO = ButtonLeft("조선말")
  // var EN = ButtonRight("English")
  // var ES = ButtonRight("Espagnol")
  // var JP = ButtonRight("日本語")
  var confirmer = OffsetMiniButton("Confirmer", "DiscoverScreen", goGames)
  var tunnel = Tunnel(4)

  var token = ""

  //* récupération du token du users pour pouvoir ajouter sa liste de jeux à son profil 
  AsyncStorage.getItem("users", function(error, data) {
    console.log(data);
    token = data
   });

  async function goGames(redirection){
    props.navigation.navigate(redirection); 


    const data = await fetch('http://192.168.1.15:3000/users/langues', {
    method: "PUT",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `languages=${platformSelected}&langue1=${languageSelected1}&langue2=${languageSelected2}&langue4=${languageSelected4}&langue5=${languageSelected5}&token=${token}`,
    })
  } 

  var chooseLanguageFR = (platformName) => {

    setSelected1(platformName)

    if(selected1 == true) {
      setPlatformSelected(...["62e9529a0864ccd30790346a"])
      setLanguageSelected1("62e9529a0864ccd30790346a")
    }
  }

  var chooseLanguageDE = (platformName) => {

    setSelected2(platformName)

    if(selected2 == true) {
      setPlatformSelected(...["62e9133b055dd925b46eb751"])
      setLanguageSelected2("62e9133b055dd925b46eb751")
    }
  }

  var chooseLanguageCO = (platformName) => {

    setSelected3(platformName)

    if(selected3 == true) {
      setPlatformSelected(...["AJOUTER_COREEN_EN_BDD"])
      setLanguageSelected3("AJOUTER_COREEN_EN_BDD")
    }
  }

  var chooseLanguageEN = (platformName) => {

    setSelected4(platformName)

    if(selected4 == true) {
      setPlatformSelected(...["62e91303055dd925b46eb74f"])
      setLanguageSelected4("62e91303055dd925b46eb74f")
    }
  }

  var chooseLanguageES = (platformName) => {

    setSelected5(platformName)

    if(selected5 == true) {
      setPlatformSelected(...["62e91365055dd925b46eb753"])
      setLanguageSelected5("62e91365055dd925b46eb753")
    }
  }

  var chooseLanguageJP = (platformName) => {

    setSelected6(platformName)

    if(selected6 == true) {
      setPlatformSelected(...["AJOUTER_JAPONAIS_EN_BDD"])
      setLanguageSelected6("AJOUTER_JAPONAIS_EN_BDD")
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
            <ButtonLeft title="Deutsch" selected2={selected1} handleClickChoosePlatformParent={chooseLanguageDE} />
            <ButtonRight title="Espagnol" selected5={selected5} handleClickChoosePlatformParent={chooseLanguageES} />
            <ButtonLeft title="조선말" selected3={selected1} handleClickChoosePlatformParent={chooseLanguageCO} />
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
