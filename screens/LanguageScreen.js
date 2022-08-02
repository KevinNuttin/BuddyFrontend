import { StyleSheet, Text, View, Title,Button } from "react-native";

export default function LanguageScreen(props) {
    return (
      <View style={styles.container}>
        <Text>Language</Text>
      
        <Button  
        title="Confirmer"
        color="#f194ff"
        onPress={() => props.navigation.navigate('AgeScreen')}>
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
  