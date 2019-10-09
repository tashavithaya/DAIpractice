/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {View, Text} from 'react-native';
import About from './comps/About';
import Start from './comps/Start';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


function App(){
    return(
    <View>
      <Start />
      <About/>
    </View>
    )
}

export default App;
