import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground} from "react-native"

import Header from "../components/cards/Header"
import ButtonLeft from "../components/buttons/ButtonLeft"
import ButtonRight from "../components/buttons/ButtonRight"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"
import AsyncStorage from '@react-native-async-storage/async-storage';

function PlatformScreen(props) {

  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const [selected4, setSelected4] = useState(false)
  const [selected5, setSelected5] = useState(false)
  const [selected6, setSelected6] = useState(false)

  const [platformSelected, setPlatformSelected] = useState([])

  var header = Header("MoodScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "LanguageScreen", goLanguage)
  var tunnel = Tunnel(3)

  var token = ""

  //* récupération du token du users pour pouvoir ajouter sa liste de jeux à son profil 
  AsyncStorage.getItem("users", function(error, data) {
    console.log(data);
    token = data
   });

  var choosePlatformPC = (platformName) => {
    setSelected1(platformName)

    if(platformName) {
      setPlatformSelected([...platformSelected,"62e9529a0864ccd30790346a"])
    } else {
      setPlatformSelected([...platformSelected.filter(id => id !== "62e9529a0864ccd30790346a")])
      }
  }

  var choosePlatformPS4 = (platformName) => {
    setSelected2(platformName)

    if(platformName) {
      setPlatformSelected([...platformSelected, "62e952a90864ccd30790346c"])
    } else {
      setPlatformSelected([...platformSelected.filter(id => id !== "62e952a90864ccd30790346c")])
      }
  }

  var choosePlatformXBOXOne = (platformName) => {
    setSelected3(platformName)

    if(platformName) {
      setPlatformSelected([...platformSelected, "62e952ad0864ccd30790346e"])
    } else {
      setPlatformSelected([...platformSelected.filter(id => id !== "62e952ad0864ccd30790346e")])
     }
  }

  var choosePlatformSwitch = (platformName) => {
    setSelected4(platformName)

    if(platformName) {
      setPlatformSelected([...platformSelected, "62e952ad0864ccd30790346e"])
    } else {
      setPlatformSelected([...platformSelected.filter(id => id !== "62e952ad0864ccd30790346e")])
     }
  }

  var choosePlatformPS5 = (platformName) => {
    setSelected5(platformName)

    if(platformName) {
      setPlatformSelected([...platformSelected, "62e952b10864ccd307903470"])
    } else {
      setPlatformSelected([...platformSelected.filter(id => id !== "62e952b10864ccd307903470")])
     }
  }

  var choosePlatformXBOXSeries = (platformName) => {
    setSelected6(platformName)

    if(platformName) {
      setPlatformSelected([...platformSelected,"62e952b60864ccd307903472"])
    } else {
      setPlatformSelected([...platformSelected.filter(id => id !== "62e952b60864ccd307903472")])
      }
  }
 
  
  async function goLanguage(redirection){
    props.navigation.navigate(redirection); 

    const data = await fetch('http://192.168.10.138:3000/users/plateforme', {
      method: "PUT",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `plateforme=${JSON.stringify(platformSelected)}&token=${token}`,
      })
      console.log(platformSelected);
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Sur quelle plateforme ?</Text>

          <View style={styles.buttons}>
            <ButtonLeft title="PC" selected1={selected1} handleClickChoosePlatformParent={choosePlatformPC} />
            <ButtonRight title="Switch" selected4={selected4} handleClickChoosePlatformParent={choosePlatformSwitch} />
            <ButtonLeft title="PS4" selected2={selected2} handleClickChoosePlatformParent={choosePlatformPS4} />
            <ButtonRight title="PS5" selected5={selected5} handleClickChoosePlatformParent={choosePlatformPS5} />
            <ButtonLeft title="XBOXOne" selected3={selected3} handleClickChoosePlatformParent={choosePlatformXBOXOne} />
            <ButtonRight title="XBOXSeries" selected6={selected6} handleClickChoosePlatformParent={choosePlatformXBOXSeries} />
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


export default PlatformScreen
