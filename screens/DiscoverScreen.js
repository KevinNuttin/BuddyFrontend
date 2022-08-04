import React, {useState} from "react"
import { StyleSheet, Text, View, Title, Button } from "react-native";

import Header2 from "../components/cards/Header2"

export default function DiscoverScreen(props) {

    return (

      <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

        <Header2/>
        <View style={styles.container}>
          <Text>Discover</Text>
          
          <Button  
          title="Confirmer"
          color="#f194ff"
          onPress={() => props.navigation.navigate('MatchScreen')}>
            </Button>
    
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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
