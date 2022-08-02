import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Sign-in</Text>
      <Button  
      title="searchGame"
      color="#f194ff"
      onPress={() => props.navigation.navigate('SearchGames')}>
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

