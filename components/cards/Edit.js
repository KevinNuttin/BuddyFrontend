import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";
import EditIcon from "../icons/EditIcon";

function Edit(redirection, onPress) {

    return(
        <View style={styles.container}>


            <TouchableOpacity  
                onPress={() => {onPress(redirection)}}>
             <EditIcon/>
            </TouchableOpacity>
            </View>
)}

const styles = StyleSheet.create({
    
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
    },

})

export default Edit

