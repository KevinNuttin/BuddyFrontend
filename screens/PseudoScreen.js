import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PseudoScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Pseudo</Text>
      <StatusBar style="auto" />
      <Button  
      title="Confirmer"
      color="#f194ff"
      onPress={() => props.navigation.navigate('EmailScreen')}>
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

