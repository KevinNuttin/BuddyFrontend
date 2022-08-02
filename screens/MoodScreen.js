import { StyleSheet, Text, View, Title, Button } from "react-native";

export default function MoodScreen(props) {
    return (
      <View style={styles.container}>
        <Text>Mood</Text>
       
        <Button  
        title="Confirmer"
        color="#f194ff"
        onPress={() => props.navigation.navigate('PlatformScreen')}>
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
  