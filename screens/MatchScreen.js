import { StyleSheet, Text, View, Title, Button } from "react-native";

export default function MatchScreen(props) {
    return (
      <View style={styles.container}>
        <Text>Match</Text>
        
        <Button  
        title="Confirmer"
        color="#f194ff"
        onPress={() => props.navigation.navigate('HomeScreen')}>
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
  