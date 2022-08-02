
import { StyleSheet, Text, View, Title, Button, TextInput, ImageBackground} from "react-native";
import OffsetMiniButton from '../components/buttons/OffsetMiniButton';



export default function BirthdayScreen(props) {
  return (
   
    <View style={styles.container}>
   
         <Text style={styles.titleText} >Ta Date d'Anniversaire</Text>
         <TextInput
        style={styles.input}
        value="Date de Naissance : ../../.."
      />
        <Button  
      title="Confirmer"
      color="#f194ff"
      onPress={() => props.navigation.navigate('PseudoScreen')}>
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
  },
});
