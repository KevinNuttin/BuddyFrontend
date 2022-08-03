import React from "react";
import { StyleSheet, Image, View } from "react-native";

function profilPicture(color) {
  // Le paramètre de changement de couleur doit être ajouté
  var color1 = "#DDABFE";
  var color2 = "#FFA588";

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={require("../../assets/avatars/avatarDefault.png")}
      />
      <View style={[styles.background, { backgroundColor: { color } }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  picture: {
    width: 116,
    height: 116,
    borderWidth: 1,
    borderColor: "#372C60",
    transform: [{ rotate: "45deg" }],
  },

  background: {
    width: 116,
    height: 116,
    backgroundColor: "#DDABFE",
    transform: [{ rotate: "45deg" }],
    marginLeft: 200,

  },
});

export default profilPicture;
