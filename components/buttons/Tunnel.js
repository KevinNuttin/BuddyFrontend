import React from "react";
import { StyleSheet, View} from "react-native";

// Le tunnel est un composant pour suivre les étapes de progression des pages

function tunnel(number) {

  if(number === 2) {
    return(
      <View style={styles.container}>
        <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 60}]}/>
        <View style={styles.tunnel}/>
        <View style={styles.tunnel}/>
      </View>
    )

  } if(number === 3) {
      return(
        <View style={styles.container}>
          <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 100}]}/>
          <View style={styles.tunnel}/>
        </View>
      )

  } if(number === 4) {
    return(
      <View style={styles.container}>
        <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 140}]}/>
      </View>
    )

} else {
    return(
        <View style={styles.container}>
          <View style={[styles.tunnel, {backgroundColor: "#745ACE"}]}/>
          <View style={styles.tunnel}/>
          <View style={styles.tunnel}/>
          <View style={styles.tunnel}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    
    container: {

        flex:1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 20,

    },

    tunnel: {

      width: 20,
      height: 20,
      backgroundColor: "#DDABFE",
      marginLeft: 20,
      marginBottom: 50,

    },
})

export default tunnel