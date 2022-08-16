
import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from "react-native";

import Header2 from "../components/cards/Header2";
import SwipeCards from "react-native-swipe-cards-deck";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';

// Page du swipe

var token = "" //* récupération du token du users pour pouvoir utiliser la comparaison de match

AsyncStorage.getItem("users", function(error, data) { 

  token = data
 });


function Card({ data }) {

let pseudo = data.pseudo

  var gamesList = data.games.map((games) => { // retirer car prend trop de place sur la card à l'affichage
    return(games.name)
  })

  var gameListImage = data.games.map((games, j) => {  // retourne l'image des jeux sur chaque card des profils
    return(
    <Image key ={j} style={styles.gameimg} source= {{uri :(games.image)}}></Image> )
  })

  var plateformeList = data.plateformes.map((plateforme) => { // retourne la platforme sur chaque card des profils
    return(plateforme.plateforme)
  })

  var moodListImage = data.moods.map((moods, k) => {  // retourne les mooods sur chaque card des profils
    return(
      <View style={styles.moods}>
        <Image key={k} source={moods}/> 
      </View>
      )
  })
     
     
    return (  // Le return d'une carte (fonction card)
      <View style={[styles.card, { backgroundColor: "#8469E1" }]}>

          <Image style={styles.image} source= {{uri :(data.picture)}}></Image>
            <Text style={styles.pseudo}> {data.pseudo}</Text>
            <Text style={styles.plateforme}> {plateformeList} </Text>
            <Text style={styles.description}>{data.description}</Text>

        <View style={styles.moods}>{moodListImage}</View>
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll} horizontal={true}> {/*showsHorizontalScrollIndicator : enlève la barre de scroll horizontale */}
        {gameListImage}
        </ScrollView>

        <View style = {styles.like}>
          <Image source={require('../assets/icons/like_iconbuddy.png')}></Image>
          <Image source={require('../assets/icons/unlike_iconbuddy.png')}></Image>
        </View>

      </View>
    );
  }
  
  function StatusCard({ text }) { // status de la carte (YEP, NOPE, MAYBE)
    return (
      <View>
        <Text style={styles.cardsText}>{text}</Text>
      </View>
    );
  }
  
   function App(props) {

    var header = Header2("ProfilScreen", "RoomScreen", props)
    var arraytemp =[]
    const [cards, setCards] = useState(); // deck de cartes
    const [myProfil, setMyProfil] = useState(); // infos du profil perso

    useEffect(() => { 

      async function loadData() { // on cherche tous les profils et le profil perso
      
        var rawDataProfil = await fetch(
          "http://192.168.10.129:3000/users/getprofil");
  
        var dataProfilfetch = await rawDataProfil.json();


        var rawDataMyProfil = await fetch(
          "http://192.168.10.129:3000/users/getmyprofil",
          { method: "PUT",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `token=${token}`, // pour moi
          })
          
          var dataMyProfil = await rawDataMyProfil.json();
          setMyProfil(dataMyProfil) // Enregistrés dans la variable d'état
  
          var gametrue= false // variable pour filtrer les jeux en communs (true si au moins 1 jeu en commun)

          arraytemp = dataProfilfetch.user.map((profil) => { 
          var games = []
          var likes = []
          var langues = []
          var moods = [] //! A voir
          var moodsImage = []
   

          for(var i=0; i< profil.games.length; i++){ // Données du jeu de la carte user
            games.push(profil.games[i])

           //var istrue = profil.games[i]._id.includes(dataMyProfil.user.games[i]._id) //! VOIR variable gametrue
            if(istrue = true){
              gametrue = true
            }
 
          }

          for(var i=0; i< profil.like.length; i++){ // Données des ID des likes user
            likes.push(profil.like[i])
          }

          for(var i=0; i< profil.langue.length; i++){ // Données des langues du profil
            langues.push(profil.langue[i])
          }

          for(var i=0; i< profil.mood.length; i++){ // Données des moods du profil
            // moods.push(profil.mood[i]._id)

            if(profil.mood[i]._id == "62e8fb0755b46687cabb297d") {  // push la bonne image du mood à partir de l'id stocké
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

          return {  // retourne un objet :
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

        //! corriger le filtre de langue 
        arraytemp = arraytemp.filter(e => e.pseudo != dataMyProfil.user.pseudo && gametrue == true) // filtre pour masquer sa propre card
        setCards(arraytemp)
      }
      loadData(); 

    }, []);

    async function handleYup(card) { // swipe like à droite

      console.log(`Yup for ${card.text}`)
      const data = await fetch('http://192.168.10.129:3000/match/like', {
        method: "PUT",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `like=${card.token}&token=${token}`,
        })
        
        let pourLeFetch = false;

        for(var i=0; i< card.likes.length; i++){
         if(card.likes[i] == myProfil.user._id ){

          pourLeFetch = true;
           
         
         }
        }
        if(pourLeFetch == true){ // condition pour vérifier le match
          const message = await fetch('http://192.168.10.143:3000/message/new', {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `user1=${card.id}&user2=${myProfil.user._id}`,  
        })
            props.onMatch(card.token) // stocke le token de la carte likée
          
            props.navigation.navigate("MatchScreen") 
        }
     

      return true; // return false if you wish to cancel the action
    }

    function handleNope(card) { //! peut permetre de supprimer definivement une carte

    
      return true;

    }

    function handleMaybe(card) { //! Stock des profils au cas où pour plus tard ???
  
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
              cards={cards} // données du deck de carte
              renderCard={(cardData) => <Card data={cardData} />} // données de chaque cartes
              keyExtractor={(cardData) => String(cardData.text)} // Clé de la carte
              renderNoMoreCards={() => <StatusCard text="Pas de Buddy, pas de partie..." />}
              actions={{
                nope: { onAction: handleNope },
                yup: { onAction: handleYup },
                maybe: { onAction: handleMaybe },
              }}
              hasMaybeAction={true} // Maybe visible ?
    
              // If you want a stack of cards instead of one-per-one view, activate stack mode
              stack={true}
              stackDepth={2} // profondeur visible du deck
            />
          ) : (
            <StatusCard text="On te trouve des Buddies..." /> // loading
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
      borderWidth: 2,
      borderColor: "#372C60",

      width: 340,
      height: 640,
      borderRadius: 40,
      padding: 10,
      borderWidth: 2,
      borderColor: "#372C60",
    },

    image: {

      borderWidth: 2,
      borderColor: "#372C60",
      borderRadius: 100,
      height: 160,
      width: 160,
      marginTop: 40,
      marginBottom:20,
    },

    pseudo: {

      fontWeight: "700",
      fontSize: 26,
      letterSpacing: 0.5,
      color: "#FFBCA6",
      textAlign: "center",
      marginBottom: 2,
    },

    plateforme:{

      fontWeight: "400",
      fontSize: 12,
      letterSpacing: 0.5,
      color: "#E8C6FF",
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
      marginBottom: 30,
    },

    moods: {

      flexDirection: "row",
      marginRight: 2,
      marginLeft: 2,
      marginBottom:10,

    },

    gameimg: {

      borderWidth: 1,
      borderColor: "#DDABFE",
      borderRadius: 100,
      height: 65,
      width: 65,
      margin: 2,
    },

    cardsText: {
      fontSize: 22,
    },

    like:{

    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    width: 450,
    marginBottom: 30,
    },

    scroll: {

      flexDirection: "row",  
    },

  });


  function mapDispatchToProps(dispatch) { // Stockage de l'ID de la carte en cours pour la stocker en cas de match
    return {
      onMatch: function (id) {
        dispatch({ type: 'addMatch', id : id  })
      }
    }
  }
 
  
  export default connect(
    null,
    mapDispatchToProps
  )(App);
  
  