import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"

import Header from "../components/cards/Header"
import Toggle from "../components/buttons/Toggle"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"
import AsyncStorage from '@react-native-async-storage/async-storage';

function MoodScreen(props) {

  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const [selected4, setSelected4] = useState(false)

  const [mood1, setMood1] = useState("62e8fb0755b46687cabb297d")
  const [mood2, setMood2] = useState("62e8fb2f55b46687cabb2981")
  const [mood3, setMood3] = useState("62e8fb3d55b46687cabb2985")
  const [mood4, setMood4] = useState("62e8fb4f55b46687cabb2989")

  var header = Header("SearchGames", props)
  var confirmer = OffsetMiniButton("Confirmer", "PlatformScreen", goPlatform)
  var tunnel = Tunnel(2)

  var token = ""

    //* récupération du token du users pour pouvoir ajouter sa liste de jeux à son profil 
    AsyncStorage.getItem("users", function(error, data) {
      console.log(data);
      token = data
     });

  var chooseMood1 = (moodName) => {
    setSelected1(moodName)

    if(moodName) {
      setMood1("62e8fb2755b46687cabb297f") // id BDD pour TryHarder
    } else {
      setMood1("62e8fb0755b46687cabb297d") // id BDD pour Chill
    }
  }

  var chooseMood2 = (moodName) => {
    setSelected2(moodName)

    if(moodName) {
      setMood2("62e8fb3855b46687cabb2983") // id BDD pour Compétitif
    } else {
      setMood2("62e8fb2f55b46687cabb2981") // id BDD pour Normal
    }
  }

  var chooseMood3 = (moodName) => {
    setSelected3(moodName)

    if(moodName) {
      setMood3("62e8fb4655b46687cabb2987") // id BDD pour Rageux
    } else {
      setMood3("62e8fb3d55b46687cabb2985") // id BDD pour Zen
    }
  }

  var chooseMood4 = (moodName) => {
    setSelected4(moodName)
    
    if(moodName) {
      setMood4("62e8fb5655b46687cabb298b") // id BBD pour Toxique
    } else {
      setMood4("62e8fb4f55b46687cabb2989") // id BBD pour Civilisé  
    }
  }

  async function goPlatform(redirection){

    props.navigation.navigate(redirection); 

    const data = await fetch('http://192.168.10.138:3000/users/mood', {
    method: "PUT",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `mood1=${mood1}&mood2=${mood2}&mood3=${mood3}&mood4=${mood4}&token=${token}`,
    })

  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ton mood</Text>

            <View style={styles.buttons}>
              <Toggle title="Chill" title2="TryHarder"  selected1={selected1} handleClickChooseMoodParent={chooseMood1} />
              <Toggle title="Normal" title2="Compétitif" selected2={selected2} handleClickChooseMoodParent={chooseMood2} />
              <Toggle title="Zen" title2="Rageux" selected3={selected3} handleClickChooseMoodParent={chooseMood3} />
              <Toggle title="Civilisé" title2="Toxique" selected4={selected4} handleClickChooseMoodParent={chooseMood4} />
            </View>

        {confirmer}

        {tunnel}

      </View>
    </ImageBackground>

  )

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

    marginTop: 60,
    marginBottom: 60,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

  buttons: {

    flex: 1,
    marginBottom: 20,
  }

});

export default MoodScreen