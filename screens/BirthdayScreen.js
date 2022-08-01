import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import composant return button


return(
    <View>
        <Button> {/* import the return button */}
       <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
      </TouchableOpacity>
      </Button>
    </View>
)


export default function BirthdayScreen() {
  return (
    <View style={styles.container}>
      <Text>Birthday</Text>
      <StatusBar style="auto" />
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

