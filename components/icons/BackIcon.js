import React from "react";
import { TouchableOpacity, Image, View} from "react-native";

function backIcon(redirection, props) {

    return(

        <View style={{marginTop: 30, marginLeft: 30}}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <Image 
                    style={{width: 25}}
                    source={require('../../assets/icons/back_iconbuddy.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default backIcon