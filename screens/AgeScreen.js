
import { StyleSheet, Text, View, Title, Button } from "react-native";

export default function AgeScreen(props) {
    return (
      <View style={styles.container}>
        <Text>Age</Text>
    
        <Button  
        title="Confirmer"
        color="#f194ff"
        onPress={() => props.navigation.navigate('DiscoverScreen')}>
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
  