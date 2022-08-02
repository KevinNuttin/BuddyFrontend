import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText} >Sign-In</Text>
      <TextInput
        style={styles.input}
        value="Email: ..."
      />
      <TextInput
        style={styles.input}
        value="Mot de Passe: ..."
      />
      <Button  
      title="Search Game"
      color="#f194ff"
      onPress={() => props.navigation.navigate('SearchGames')}>
        </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",

  },
  titleText: {
    fontWeight: "400",
    fontSize: "25",
    color: "#372C60"
  },
  input: {
      width : 200,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  }
});

