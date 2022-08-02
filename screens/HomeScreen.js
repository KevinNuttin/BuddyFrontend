import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Homescreen(props) {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <StatusBar style="auto" />
      
         {/* import the return button */}

         <Button  
      title="Sign-Up"
      color="#f194ff"
      onPress={() => props.navigation.navigate('BirthdayScreen')}>
        </Button>

      <Button  
      title="Sign-In"
      color="#f194ff"
      onPress={() => props.navigation.navigate('SignInScreen')}>
        </Button>

    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

