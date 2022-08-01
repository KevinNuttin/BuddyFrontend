import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign-in</Text>
      <StatusBar style="auto" />
      <Button  
      title="Confirmer"
      color="#f194ff"
      onPress={() => props.navigation.navigate('BirthdayScreen')}>
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

