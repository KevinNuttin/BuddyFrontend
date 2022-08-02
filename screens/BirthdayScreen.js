
import { StyleSheet, Text, View, Title } from "react-native";
import OffsetMiniButton from '../components/buttons/OffsetMiniButton';
import BackIcon from '../components/icons/BackIcon';


export default function BirthdayScreen() {
  return (
    <View style={styles.container}>
      {/* import the return button */}

        <Text>=bonjour</Text>
      
        <OffsetMiniButton titleButton="Confirm"/>
        <BackIcon/>

        
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
