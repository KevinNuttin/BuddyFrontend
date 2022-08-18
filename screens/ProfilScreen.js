import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

import React, { useState, useEffect } from "react";
import ProfilPicture from "../components/cards/ProfilPicture";
import Header4 from "../components/cards/Header4";
import AsyncStorage from '@react-native-async-storage/async-storage';

var token = ""
// Page de profil 
//* récupération du token du users pour pouvoir utiliser la comparaison de match

AsyncStorage.getItem("users", function(error, data) {

  token = data
 });

export default function ProfilScreen(props) {

  var header = Header4("DiscoverScreen","SearchGames", "RoomScreen", props)

  const [picture, setPicture] = useState('');
  const [description, setDesc] = useState('');
  const [mood, setMood] = useState([]);
  const [pseudo, setPseudo] = useState('');
  const [plat, setPlat] = useState([]);
  const [games, setGames] = useState([]);

  let profil;

  useEffect(() => {
    async function loadData() { // récupération des données du user
    var rawDataMyProfil = await fetch(
      "http://192.168.1.21:3000/users/getmyprofil",
      { method: "PUT",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${token}`,
      })
    
       var json = await rawDataMyProfil.json(); 
       
      setPicture(json.user.picture) // ajout de la profil picture
      setDesc(json.user.description) // ajout de la description
      setPseudo(json.user.pseudo) // ajout du pseudo
      setMood(json.user.mood) // ajout des moods
      setPlat(json.user.plateforme) // ajout des plateformes
      setGames(json.user.games) // ajout des jeux

    }
  loadData(); 
  }, []);

  var  ProfilPic = ProfilPicture(picture);

  function emoji(data){ // récupération des bonnes immages pour les moods sélectionnés
    let moodsImage = [];
    for(var i=0; i< data.length; i++){
      // moods.push(profil.mood[i]._id)

      if(data[i]._id == "62e8fb0755b46687cabb297d") {
         moodsImage.push(require("../assets/emojis/chill.png"))
      } if (data[i]._id == "62e8fb2755b46687cabb297f") {
         moodsImage.push(require("../assets/emojis/tryharder.png"))
      } if (data[i]._id == "62e8fb2f55b46687cabb2981") {
          moodsImage.push(require("../assets/emojis/normal.png"))
      } if (data[i]._id == "62e8fb3855b46687cabb2983") {
          moodsImage.push(require("../assets/emojis/competitif.png"))
      } if (data[i]._id == "62e8fb3d55b46687cabb2985") {
          moodsImage.push(require("../assets/emojis/zen.png"))
      } if (data[i]._id == "62e8fb4655b46687cabb2987") {
          moodsImage.push(require("../assets/emojis/rageux.png"))
      } if (data[i]._id == "62e8fb4f55b46687cabb2989") {
          moodsImage.push(require("../assets/emojis/civilise.png"))
      } if (data[i]._id == "62e8fb5655b46687cabb298b") {
         moodsImage.push(require("../assets/emojis/toxique.png"))
      }
    }
return(
  <View style={styles.mood}>
  <Image source={moodsImage[0]} style ={styles.emoji}></Image>
  <Image source={moodsImage[1]}  style ={styles.emoji}></Image>
  <Image source={moodsImage[2]}  style ={styles.emoji}></Image>
  <Image source={moodsImage[3]}   style ={styles.emoji}></Image>
  </View>
)
  }

function displayPlateforme(data){ // affichage des plateformes sous la forme d'une ligne

let text = '';
if(data){
  for(var i=0; i< data.length; i++){
    text = text+' '+data[i].plateforme


}
}
return text
}

var plateformes =  displayPlateforme(plat)

  var emoJ = emoji(mood)


  var gameListImage = games.map((games, j) => { // affichage de toutes les images de jeux 

    return(
    <Image key ={j} style={styles.gameimg} source= {{uri :(games.image)}}></Image> )
  })

  console.log(gameListImage);

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/fond_buddy.png")}>

      {header}

      <View style={styles.container}>
        {ProfilPic}

        <View style={styles.containerText}>
          <Text style={styles.text1}>{pseudo}</Text>
          <View style={styles.plateforme}><Text>{plateformes}</Text></View>
          <Text style={styles.text3}>
            {description}
          </Text>
        </View>

        {/* View pour les images de mood --> les mettre en ligne  */}
{emoJ}

        {/* View pour les images de jeux / les mettre en lignes --> envisager un caroussel */}
        <ScrollView style={styles.scroll} horizontal={true}>
          {gameListImage}
        </ScrollView>
        
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
    alignItems: "center",
    justifyContent: "center",
  },

  containerText: {

    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40,
  },

  text1: {
    fontWeight: "bold",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    marginBottom: 10,
  },

  text2: {
    fontWeight: "200",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#372C60",
    marginBottom: 20,
  },

  text3: {
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic",
    letterSpacing: 0.5,
    color: "#372C60",
    marginBottom: 40,
    textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
  },

  mood: {

    flexDirection: "row",
    marginTop: 150,
    marginBottom:50,

  },
  
  emoji:{

    marginLeft : 10,
    marginRight : 10
  },

  scroll: {
    marginRight: 20,
    marginLeft: 20,
  },

  GameName: {
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 15,
    fontSize: 16,
    borderBottomColor: "#f194ff",
    borderBottomWidth: 1,
    height: 60,
  },

  image:{

    height:100,
    width:100,
    marginRight: 20,
    marginLeft: 20,
  },

  plateforme:{

    flexDirection:"row",
    marginTop:10,
    marginBottom: 50,
    width: 300,
    justifyContent: "space-evenly"
  },
  
  gameimg: {

    borderWidth: 1,
    borderRadius: 100,
    height: 55,
    width: 55,
    margin: 6,
  },

});
