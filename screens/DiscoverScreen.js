import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, ImageBackground, Button, Image, ScrollView } from "react-native";

import Header2 from "../components/cards/Header2";
import SwipeCards from "react-native-swipe-cards-deck";
import AsyncStorage from '@react-native-async-storage/async-storage';

const cardsData = [
  { src: require('../assets/avatars/Group.png') },
  { src: require('../assets/avatars/Group2.png') },
  { src: require('../assets/avatars/Group3.png') },
  { src: require('../assets/avatars/Group4.png') },
  { src: require('../assets/avatars/Group5.png') },
  { src: require('../assets/avatars/Group6.png') },
];



var token = ""

//* récupération du token du users pour pouvoir utiliser la comparaison de match


AsyncStorage.getItem("users", function(error, data) {
  console.log("data", data);
  token = data
 });


function Card({ data }) {

  var gamesList = data.games.map((games) => {
    return(games.name)
  })

  var gameListImage = data.games.map((games, j) => {
    return(
    <Image key ={j} style={styles.gameimg} source= {{uri :(games.image)}}></Image> )
  })

  var plateformeList = data.plateformes.map((plateforme) => {
    return(plateforme.plateforme)
  })

  var moodListImage = data.moods.map((moods, k) => {
    return(
      <View style={styles.moods}>
        <Image key={k} source={moods}/> 
      </View>
      )
  })
     
     
    return (
      <View style={[styles.card, { backgroundColor: "#866FD3" }]}>

          <Image style={styles.image} source= {{uri :(data.picture)}}></Image>
            <Text style={styles.pseudo}> {data.pseudo}</Text>
            <Text style={styles.plateforme}> {plateformeList}</Text>
            <Text style={styles.description}>{data.description}</Text>


        <View style={styles.moods}>{moodListImage}</View>
        <Text style={styles.description}> {gamesList} </Text>
        <ScrollView  style={styles.scroll} horizontal={true}>
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

    var header = Header2("ProfilScreen", "ChatScreen", props)
    var arraytemp =[]
    const [cards, setCards] = useState();
    const [myProfil, setMyProfil] = useState();

    // replace with real remote data fetching
    useEffect(() => {

      async function loadData() {
      
        var rawDataProfil = await fetch(
          "http://192.168.10.138:3000/users/getprofil");
  
        var dataProfilfetch = await rawDataProfil.json();


        var rawDataMyProfil = await fetch(
          "http://192.168.10.138:3000/users/getmyprofil",
          { method: "PUT",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `token=${token}`,
          })
          
          var dataMyProfil = await rawDataMyProfil.json();
          setMyProfil(dataMyProfil)

          arraytemp = dataProfilfetch.user.map((profil) => {
          var games = []
          var likes = []
          var langues = []
          var moods = []
          var moodsImage = []

          for(var i=0; i< profil.games.length; i++){
            games.push(profil.games[i])
          }

          for(var i=0; i< profil.like.length; i++){
            likes.push(profil.like[i])
          }

          for(var i=0; i< profil.langue.length; i++){
            langues.push(profil.langue[i])
          }

          var gametrue= false
        
          for(var i =0; i < games.length; i++){
            gametrue = arraytemp.includes(games[i])
           }
           console.log(gametrue);
          for(var i=0; i< profil.mood.length; i++){
            // moods.push(profil.mood[i]._id)

            if(profil.mood[i]._id == "62e8fb0755b46687cabb297d") {
               moodsImage.push(require("../assets/emojis/chill.png"))
            } if (profil.mood[i]._id == "62e8fb2755b46687cabb297f") {
               moodsImage.push(require("../assets/emojis/tryharder.png"))
            } if (profil.mood[i]._id == "62e8fb2f55b46687cabb2981") {
                moodsImage.push(require("../assets/emojis/normal.png"))
            } if (profil.mood[i]._id == "62e8fb3855b46687cabb2983") {
                moodsImage.push(require("../assets/emojis/competitif.png"))
            } if (profil.mood[i]._id == "62e8fb3d55b46687cabb2985") {
                moodsImage.push(require("../assets/emojis/zen.png"))
            } if (profil.mood[i]._id == "62e8fb4655b46687cabb2987") {
                moodsImage.push(require("../assets/emojis/rageux.png"))
            } if (profil.mood[i]._id == "62e8fb4f55b46687cabb2989") {
                moodsImage.push(require("../assets/emojis/civilise.png"))
            } if (profil.mood[i]._id == "62e8fb5655b46687cabb298b") {
               moodsImage.push(require("../assets/emojis/toxique.png"))
            }
          }

          return {
            id: profil._id,
            pseudo: profil.pseudo,
            description : profil.description,
            picture : profil.picture,
            token: profil.token,
            visible: profil.visible,
            games : profil.games,
            likes: likes,
            plateformes: profil.plateforme,
            moods : moodsImage,
            langues : langues
        
          }
         
        })


        // corriger le filtre de langue 
       arraytemp = arraytemp.filter(e => e.pseudo != dataMyProfil.user.pseudo && e.langues != dataMyProfil.user.langue && samegames == true)
    
  

       console.log("langue",arraytemp[0].langues );

        setCards(arraytemp)
      }
      loadData(); 

    }, []);

    async function handleYup(card) {

      console.log(`Yup for ${card.text}`);
      const data = await fetch('http://192.168.10.138:3000/match/like', {
        method: "PUT",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `like=${card.token}&token=${token}`,
        })
      
        for(var i=0; i< card.likes.length; i++){
         if(card.likes[i] == myProfil.user._id ){

          props.navigation.navigate("MatchScreen") 
         }
        }
     // force le match pour la demo (à retirer)
      console.log(`Card, ${card.token}` );

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
              stackDepth={2}
            />
          ) : (
            <StatusCard text="On te trouve des Buddies..." />
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
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",

      width: 320,
      height: 580,
      backgroundColor: "#866FD3",
      borderRadius: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: "#372C60",
    },

    image: {
      borderWidth: 4,
      borderColor: "#FFFF",
      borderRadius: 100,
      height: 160,
      width: 160,
      marginBottom:10
    },

    pseudo: {

      fontWeight: "400",
      fontSize: 26,
      letterSpacing: 0.5,
      color: "#FFFF",
      marginBottom:10
    },

    plateforme:{

      fontWeight: "400",
      fontSize: 12,
      letterSpacing: 0.5,
      color: "#FFFF",
      textAlign: "center",
      marginBottom:10,
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

    moods: {

      flexDirection: "row",
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

  });
  