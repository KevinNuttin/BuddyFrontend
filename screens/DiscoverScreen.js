import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, ImageBackground, Button, Image, ScrollView } from "react-native";

import Header2 from "../components/cards/Header2";
import SwipeCards from "react-native-swipe-cards-deck";

const cardsData = [
  { src: require('../assets/avatars/Group.png') },
  { src: require('../assets/avatars/Group2.png') },
  { src: require('../assets/avatars/Group3.png') },
  { src: require('../assets/avatars/Group4.png') },
  { src: require('../assets/avatars/Group5.png') },
  { src: require('../assets/avatars/Group6.png') },
];


  function Card({ data }) {

    var gamesList = data.games.map((games, i) => {
      return(games.name)
     })
     var gameListImage = data.games.map((games, j) => {
      return(
        <Image style={styles.gameimg} source= {{uri :(games.image)}}></Image> )
     })
     console.log("data", data)
     var plateformeList = data.plateformes.map((plateforme, j) => {
      return(plateforme.plateforme)
     })
     
    return (
      <View style={[styles.card, { backgroundColor: "#866FD3" }]}>
        <Text>{data.text}</Text>
        <Image style={styles.img} source= {{uri :(data.picture)}}></Image>
        <Text style={styles.pseudo}> {data.pseudo}</Text>
        <Text style={styles.description}> {plateformeList}</Text>
      <View style={styles.plateforme}><Text style={styles.description}>{data.description}</Text></View>
        <Text style={styles.description}> {gamesList} </Text>
        <ScrollView style={styles.scroll} horizontal={true}>
        {gameListImage}
        </ScrollView>

        <View style = {styles.like}>
          <Image source={require('../assets/icons/like_iconbuddy.png')}></Image>
          <Image source={require('../assets/icons/unlike_iconbuddy.png')}></Image>
        </View>

      </View>
    );
  }
  
  function StatusCard({ text }) {
    return (
      <View>
        <Text style={styles.cardsText}>{text}</Text>
      </View>
    );
  }
  
  export default function App(props) {

    var header = Header2("ProfilScreen", "DiscoverScreen", props)
    const [cards, setCards] = useState();

    // replace with real remote data fetching
    useEffect(() => {

      async function loadData() {
      
        var rawDataProfil = await fetch(
          "http://192.168.10.97:3000/users/getprofil");
  
        var dataProfilfetch = await rawDataProfil.json();

        var arraytemp = dataProfilfetch.user.map((profil, i) => {
          var games = []
          var likes = []
           var langues =[]

          for(var i=0; i< profil.games.length; i++){
            games.push(profil.games[i])
          }
          for(var i=0; i< profil.like.length; i++){
            likes.push(profil.like[i])
          }
  

          return {
            pseudo: profil.pseudo,
            description : profil.description,
            picture : profil.picture,
            token: profil.token,
            visible: profil.visible,
            games : profil.games,
            likes: likes,
            plateformes: profil.plateforme,
            moods : profil.mood,
            langues : langues
        
          }
        })
        setCards(arraytemp)
      }
  
      loadData();
      
    }, []);

    function handleYup(card) {
      console.log(`Yup for ${card.text}`);
      props.navigation.navigate("MatchScreen") // force le match pour la demo (à retirer)
      return true; // return false if you wish to cancel the action
    }
    function handleNope(card) {
      console.log(`Nope for ${card.text}`);
      return true;
    }
    function handleMaybe(card) {
      console.log(`Maybe for ${card.text}`);
      return true;
    }
  
    return (

      <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

        <View style={styles.container}>
          {cards ? (
            <SwipeCards
              cards={cards}
              renderCard={(cardData) => <Card data={cardData} />}
              keyExtractor={(cardData) => String(cardData.text)}
              renderNoMoreCards={() => <StatusCard text="Pas de Buddy, pas de partie..." />}
              actions={{
                nope: { onAction: handleNope },
                yup: { onAction: handleYup },
                maybe: { onAction: handleMaybe },
              }}
              hasMaybeAction={true}
    
              // If you want a stack of cards instead of one-per-one view, activate stack mode
              stack={true}
              stackDepth={3}
            />
          ) : (
            <StatusCard text="Loading Buddies..." />
          )}
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

    card: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: 320,
      height: 580,
      borderRadius: 40,
      textAlign: "center",
      padding: 10,
    },

    pseudo: {

      fontWeight: "400",
      fontSize: 26,
      letterSpacing: 0.5,
      color: "#FFFF",
      marginBottom:10
    
    },

    description: {

      fontWeight: "400",
      fontSize: 16,
      fontStyle: "italic",
      letterSpacing: 0.5,
      color: "#FFFF",
      textAlign: "center",
      marginBottom:10,
    },

    img: {

      borderWidth: 4,
      borderColor: "#FFFF",
      borderRadius: 100,
      height: 180,
      width: 180,
      marginBottom:10

    },
    gameimg: {
      borderWidth: 4,
      borderColor: "#FFFF",
      borderRadius: 100,
      height: 80,
      width: 80
    },
    cardsText: {
      fontSize: 22,
    },

    like:{
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    width: 450,
    marginBottom:20
    },
    scroll: {
      flexDirection: "row",  
    },
    emoji: {
      flexDirection: "row", 
      width: 200,
      height: 80
    },
    plateforme:{
      width: 200,
      justifyContent: "space-evenly",
    }
  });
  