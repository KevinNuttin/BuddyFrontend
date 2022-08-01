import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


// import composant return button
export default function BirthdayScreen(props){
return(
  <View style={styles.container}>
         {/* import the return button */}
      <Button
          name="arrow-back-outline"
          size={20}
          color="#ffffff"

         onPress={() => props.navigation.navigate('HomeScreen')}>

        </Button>
        <Text>Birthday</Text>
     <StatusBar style="auto" />

     <Button  
      title="Confirmer"
      color="#f194ff"
      onPress={() => props.navigation.navigate('BirthdayScreen')}>
        </Button>

</View>
  
)
}

//BirthdayScreen nav --> redirection to PseudoScreen
{/*function BirthdayScreenFunction(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2ecc71'}}>
      <Button title="Confirmer"
        onPress={() => props.navigation.navigate('Pseudo')}
      />
    </View>
  );
 }*/}
// insert text, input and tunnel
        



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

