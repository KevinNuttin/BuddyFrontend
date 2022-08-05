import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, ImageBackground, Button, Image } from "react-native";
import Header2 from "../components/cards/Header2";
import SwipeCards  from 'react-native-swipe-cards-deck';

const cardsData = [
  { src: require('../assets/avatars/avatar1.png') },
  { src: require('../assets/avatars/avatar2.png') },
  { src: require('../assets/avatars/avatar3.png') },
  { src: require('../assets/avatars/avatar4.png') },
  { src: require('../assets/avatars/avatar5.png') },
  { src: require('../assets/avatars/avatar6.png') },
];


  function Card({ data }) {
    return (
      <View style={[styles.card, { backgroundColor: "#866FD3" }]}>
        <Text>{data.text}</Text>
        <Image style={styles.img} source = {data.src}></Image>
        <Text style={styles.pseudo}> {data.pseudo}</Text>
        <Text style={styles.description}>{data.description}</Text>
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
      setTimeout(() => {
        setCards([
        { text: "youhou", pseudo: "Michele", backgroundColor: "FDEBE6", description: "Salut c'est Michele, j'aime les nachos et jouer de l'harmonica Alsacien... (c'est faux).", src: require('../assets/avatars/avatar1.png', )},
        { text: "youhou", pseudo: "Jean-Jean", backgroundColor: "FDEBE6", description: "Salut c'est Jean-Jean, j'aime photocopier du sable. Tu connais Pokemon ?", src: require('../assets/avatars/avatar2.png') },
        { text: "youhou", pseudo: "Mimi", backgroundColor: "FDEBE6", description: "Salut c'est Mimi, je suis elleboniste, je teste l'eau des piscines et je dis si elle est bonne", src: require('../assets/avatars/avatar3.png') },
        { text: "youhou", pseudo: "Pedro", backgroundColor: "FDEBE6", description: "Salut c'est Pedro, je mets les pieds où je veux et c'est souvent dans la gueule... ", src: require('../assets/avatars/avatar4.png') },
        { text: "youhou", pseudo: "Sophie_Fonsec", backgroundColor: "FDEBE6", description: "Yo, je suis Végan mais c'est pas grave. Tu connais DOOM ?", src: require('../assets/avatars/avatar5.png')},
        { text: "youhou", pseudo: "Polin", backgroundColor: "FDEBE6", description: "Flem de faire ma decription. Je joue a lol c'est normal.", src: require('../assets/avatars/avatar6.png') },
        ]);
      }, 3000);
    }, []);
  
    function handleYup(card) {
      console.log(`Yup for ${card.text}`);
      props.navigation.navigate("MatchScreen")
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
              // stack={true}
              // stackDepth={3}
            />
          ) : (
            <StatusCard text="Loading..." />
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
      padding: 50,
    },

    pseudo: {
      fontWeight: "400",
      fontSize: 26,
      letterSpacing: 0.5,
      color: "#FFFF",
      marginTop: -60,

    },

    description: {

      fontWeight: "400",
      fontSize: 16,
      fontStyle: "italic",
      letterSpacing: 0.5,
      color: "#FFFF",
      textAlign: "center",
    },

    img: {

      borderWidth: 4,
      borderColor: "#FFFF",
      borderRadius: 100,
      marginTop: -100,
      marginBottom:40,
    },

    cardsText: {
      fontSize: 22,
      marginBottom: 20,
    },
    like:{
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    width: 450,
    marginBottom: -70,
    }
  });
  