import React from 'react';
import {View, Text, Image} from 'react-native';

function About(){
    return(
    <View>
        <Text>Grilled Cheese</Text>
        <Text>Tasha</Text>
        <Image
            source={{uri:'https://www.pinclipart.com/picdir/middle/5-59262_mushrooms-clipart-animated-1-congratulations-clipart-mushroom-cartoon.png'}}
            style={{width:100, height:100}}
        />
        <Text>Loves all the mushrooms "Whooooo, YES YES YES!!" </Text>
        <Text>Deriq</Text>
        <Text>Angela</Text>
        

    </View>
    )
}

export default About;