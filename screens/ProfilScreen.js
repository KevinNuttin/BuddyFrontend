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
} from "react-native";
import React, { useState } from "react";
import ProfilPicture from "../components/cards/ProfilPicture";
import CardGame from "../components/cards/CardGame";


export default function ProfilScreen(props) {
  var ProfilPic = ProfilPicture();
  var Card = CardGame();


  return (

//creation d'une nav bar 

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/fond_buddy.png")}
    >
      {/*<View style={styles.header}>
{retour}
  {message}</View>*/}

      <View>
        
        <View style={styles.container}>
          {ProfilPic}

          <View>
          <Text style={styles.text1}>Pseudo</Text>
          <Text style={styles.text2}>Description</Text>
          <Text style={styles.text3}>Plateforme</Text>
          </View>

          {/* View pour les images de mood --> les mettre en ligne  */}
          <View style={styles.emoji}>
            <Image source={require("../assets/emojis/chill.png")}></Image>
            <Image source={require("../assets/emojis/civilise.png")}></Image>
            <Image source={require("../assets/emojis/competitif.png")}></Image>
            <Image source={require("../assets/emojis/normal.png")}></Image>
            <Image source={require("../assets/emojis/rageux.png")}></Image>
          </View>

          {/* View pour les images de jeux / les mettre en llignes --> envisager un caroussel */}
          <ScrollView style={styles.scroll} horizontal={true}>
            {Card}
            {Card}
            {Card}
            {Card}
            {Card}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },

  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text1:{
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#372C60",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  text2:{
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
    fontSize: 14,
    fontWeight: "200",
    color: "#372C60",
  },
  text3:
    {
      flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
      fontWeight: "200",
      fontSize: 14,
      color: "#372C60",
      marginBottom:190,
    },

  emoji: {
    flexDirection: "row",
  },
  header: {
    flex: 1,
    flexDirection:"row",
  },

  scroll: {},
});
