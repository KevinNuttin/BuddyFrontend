import {
  StyleSheet,
  Text,
  View,
  Title,
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import ProfilPicture from '../components/cards/ProfilPicture'
import CardGame from '../components/cards/CardGame'

export default function ProfilScreen(props) {

  var ProfilPic = ProfilPicture()
  var Card = CardGame()

  return (
   
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/fond_buddy.png")}
    >

      <SafeAreaView style={styles.container}>

      <View style={{flex:1, flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginTop: 10}}>
        {ProfilPic}
</View>

<View style={{flexDirection: "column", justifyContent: "flex-start", alignItems: "center", marginTop: 290}}>
        <Text style={{fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#372C60"}}>Pseudo</Text>
        <Text style={{fontWeight: "200",
    fontSize: 12,
    letterSpacing: 0.5,
    color: "#372C60",}}>Plateforme</Text>
        <Text style={{ fontWeight: "200",
    fontSize: 12,
    letterSpacing: 0.5,
    color: "#372C60",}}>Description</Text>

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
<ScrollView
  horizontal={true}>
        {Card}
        {Card}
        {Card}
        {Card}
        {Card}
        </ScrollView>

        
      </SafeAreaView>
   
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    flexDirection: "row", 
    justifyContent:"space-between",
   marginTop: 200,
   resizeMode: 'contain'
  }
});
