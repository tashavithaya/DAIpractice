
import React from "react";
import Contacts from "./comps/Contacts";
import {View, Text} from 'react-native';


function App(){
  return(
    <View>
      <Contacts />
    </View>
  )
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Start from './comps/Start';

function App(){
    return(
    <View>
      <Start />
    </View>
    )
}


export default App;
