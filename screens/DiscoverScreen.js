import { StyleSheet, Text, View, Title, Button } from "react-native";

export default function DiscoverScreen(props) {
    return (
      <View style={styles.container}>
        <Text>Discover</Text>
       
        <Button  
        title="Confirmer"
        color="#f194ff"
        onPress={() => props.navigation.navigate('MatchScreen')}>
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
  