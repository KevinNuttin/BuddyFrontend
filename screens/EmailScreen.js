
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function EmailScreen(props) {
  return (

    <View style={styles.container}>

       <Text style={styles.titleText} >Ton Email</Text>
       <TextInput
        style={styles.input}
        value="Ton Email : ..."
      />
      <Button  
      title="Confirmer"
      color="#f194ff"
      onPress={() => props.navigation.navigate('PasswordScreen')}>
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

