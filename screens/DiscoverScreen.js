import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";

import Header2 from "../components/cards/Header2"

export default function DiscoverScreen(props) {

  var header = Header2(props)

    return (

      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/backgrounds/fond_buddy.png')}>

        {header}
          <View style={styles.container}>
            <Text>Discover</Text>
            
            <Button  
              title="My Buddy is Ready"
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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    
  });
  
