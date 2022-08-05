import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, Title, Button, ImageBackground, Image} from "react-native";

import Header2 from "../components/cards/Header2"
import CardsSwipe from 'react-native-cards-swipe';
import SwipeCards from "react-native-swipe-cards-deck";

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
      <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
        <Text>{data.text}</Text>
        <Image source = {data.src}></Image>
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
    const [cards, setCards] = useState();
  
    // replace with real remote data fetching
    useEffect(() => {
      setTimeout(() => {
        setCards([
          { text: "Tomato", backgroundColor: "red" , src: require('../assets/avatars/avatar1.png')},
        { text: "Aubergine", backgroundColor: "purple", src: require('../assets/avatars/avatar1.png') },
        { text: "Courgette", backgroundColor: "green", src: require('../assets/avatars/avatar1.png') },
        { text: "Blueberry", backgroundColor: "blue", src: require('../assets/avatars/avatar1.png') },
        { text: "Umm...", backgroundColor: "cyan" , src: require('../assets/avatars/avatar1.png')},
        { text: "orange", backgroundColor: "orange", src: require('../assets/avatars/avatar1.png') },
        ]);
      }, 3000);
    }, []);
  
    function handleYup(card) {
      console.log(`Yup for ${card.text}`);
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
      <View style={styles.container}>
        {cards ? (
          <SwipeCards
            cards={cards}
            renderCard={(cardData) => <Card data={cardData} />}
            keyExtractor={(cardData) => String(cardData.text)}
            renderNoMoreCards={() => <StatusCard text="No more cards..." />}
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
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#f194ff",
      justifyContent: "center",
      alignItems: "center",
      width: 300,
      height: 300,
    },
    cardsText: {
      fontSize: 22,
    },
  });
  