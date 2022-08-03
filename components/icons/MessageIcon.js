import React, { useState } from "react";
import { TouchableOpacity, View, Image} from "react-native";

function MessageIcon(redirection, props) {

    return(

        <View style={{marginTop: 60, marginLeft: "75%"}}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <Image 
                    style={{width: 25}}
                    source={require('../../assets/icons/message_iconbuddy.png')}/>
            </TouchableOpacity>
        </View>
    )
}


export default MessageIcon