import React from "react";
import { Image } from "react-native";

function MessageBadgeIcon() {

    return(

        <Image 
        style={{width: 25}}
        source={require('../../assets/icons/messageBadge_iconbuddy.png')}/>

    )
}

export default MessageBadgeIcon