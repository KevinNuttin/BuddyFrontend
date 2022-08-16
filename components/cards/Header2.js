import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

import UserIcon from "../icons/UserIcon";
import MessageIcon from "../icons/MessageIcon"; //! l'icone de message sera utile pour afficher un badge si les messages sont lus
import MessageBadgeIcon from "../icons/MessageBadgeIcon";

// Le header 2 correspond au header de Discover avec une redirection vers le cpt User 
// et l'autre ver la messagerie

function Header2(redirection, redirection2, props) {



    return(
        <View style={styles.container}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <UserIcon/>
            </TouchableOpacity>

            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection2)}}>
                    <MessageBadgeIcon/>
            </TouchableOpacity>
        </View>
        
    )
}

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

export default Header2