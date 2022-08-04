import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

import BackIcon from "../icons/BackIcon";

function Header(redirection, props) {

    return(
        <View style={styles.container}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <BackIcon/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40,
        height: 60,

    },

})

export default Header