
import { StyleSheet, Text, View, Title, Button } from "react-native";
import OffsetMiniButton from '../components/buttons/OffsetMiniButton';



export default function BirthdayScreen(props) {
  return (
    <View style={styles.container}>
      {/* import the return button */}

        <Text>anniversaire</Text>
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
    justifyContent: "center",
  },
});
