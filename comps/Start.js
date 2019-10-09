import React from 'react';
import {View, Text, Image} from 'react-native';
import StartStyles from '../styles/StartStyles';

function Start(){
    return (
        <View style={StartStyles}>
            <Text>Welcome to Grilled Cheese</Text>
            <Image source={{url: "https://bit.ly/2q1fpXF"}}/>
        </View>
    )
}

export default Start;