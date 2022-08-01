import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function tunnel(number) {

  if(number === 2) {
    return(
      <View style={styles.container}>
        <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 60}]}/>
        <View style={styles.tunnel}/>
        <View style={styles.tunnel}/>
        <View style={styles.tunnel}/>
      </View>
    )

  } if(number === 3) {
      return(
        <View style={styles.container}>
          <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 100}]}/>
          <View style={styles.tunnel}/>
          <View style={styles.tunnel}/>
        </View>
      )

  } if(number === 4) {
    return(
      <View style={styles.container}>
        <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 140}]}/>
        <View style={styles.tunnel}/>
      </View>
    )

} if(number === 5) {
  return(
    <View style={styles.container}>
      <View style={[styles.tunnel, {backgroundColor: "#745ACE", width: 180}]}/>
    </View>
  )

} else {
    return(
        <View style={styles.container}>
          <View style={[styles.tunnel, {backgroundColor: "#745ACE"}]}/>
          <View style={styles.tunnel}/>
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

    },

    tunnel: {

      width: 20,
      height: 20,
      backgroundColor: "#DDABFE",
      marginLeft: 20,
      marginBottom: 70,

    },
})

export default tunnel