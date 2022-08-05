import {
  StyleSheet,
  Text,
  View,
  Title,
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

import React, { useState, useEffect } from "react";
import ProfilPicture from "../components/cards/ProfilPicture";
import CardGame from "../components/cards/CardGame";
import Header2 from "../components/cards/Header2";

export default function ProfilScreen(props) {
  
  var ProfilPic = ProfilPicture();
  var header = Header2()

  const [dataPseudo, setDataPseudo] = useState("..");
  const [dataPlatform, setDataPlatform] = useState([]);
  const [dataGames, setDataGames] = useState([]);

  useEffect(() => {
    async function loadData() {
      var rawData = await fetch(
        "http://192.168.10.144:3000/users/profil?token=3xFbU9iw24lAVWLVQssErWODNUK2gLWb"
      );

      var data = await rawData.json();
      console.log("logggg", data.user.pseudo);
      setDataPseudo(data.user.pseudo);

      console.log("logggg", data.user.plateforme);
      setDataPlatform(data.user.plateforme);

      console.log("ahhhhh", data.user.games);
      setDataGames(data.user.games);
    }

    loadData();
  }, []);

  var test = dataPlatform.map((plateforme, i) => {
    return <Text style={styles.text2}>{plateforme.plateforme}</Text>;
  });

  var image = dataGames.map ((image, i ) => {
    return   <Image
              source={{
                uri: image.image,
              }}
              style={styles.image}
            ></Image>
         
  });


  function GameSelectColor(name, img) {}

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/fond_buddy.png")}>

      {header}

      <View style={styles.container}>
        {ProfilPic}

        <View style={styles.containerText}>
          <Text style={styles.text1}>{dataPseudo}</Text>
          {test}
          <Text style={styles.text3}>
            Salut c'est Matth, j'aime les nachos et jouer de l'harmonica Alsacien... (c'est faux).
          </Text>
        </View>

        {/* View pour les images de mood --> les mettre en ligne  */}
        <View style={styles.emoji}>
          <Image source={require("../assets/emojis/chill.png")}></Image>
          <Image source={require("../assets/emojis/civilise.png")}></Image>
          <Image source={require("../assets/emojis/competitif.png")}></Image>
          <Image source={require("../assets/emojis/normal.png")}></Image>
          <Image source={require("../assets/emojis/rageux.png")}></Image>
        </View>

        {/* View pour les images de jeux / les mettre en lignes --> envisager un caroussel */}
        <ScrollView style={styles.scroll} horizontal={true}>
              {image}
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

  emoji: {

    flexDirection: "row",
    marginTop: 40,
  },

  scroll: {
    marginRight: 10,
    marginLeft: 10,
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

});
