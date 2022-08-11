import React from "react";
import { StyleSheet, Image, View } from "react-native";

function profilPicture(image) {

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{ uri: `${image}`}}
      />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },

  picture: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: "#372C60",
    borderRadius: 360,
  },

  background: {
    width: 116,
    height: 116,
    backgroundColor: "#DDABFE",
  },
});

export default profilPicture;