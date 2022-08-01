import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PseudoScreen() {
  return (
    <View style={styles.container}>
      <Text>Pseudo</Text>
      <StatusBar style="auto" />
      <Button  
      title="Confirmer"
      color="#f194ff"
      onPress={() => props.navigation.navigate('BirthdayScreen')}>
        </Button>

    </View>
  );
}

//PseudoScreen nav --> redirection to EmailScreen
 function PseudoScreenFunction(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Email')}
      />
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

