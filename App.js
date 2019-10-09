
import React from "react";
import Contacts from "./comps/Contacts";
import About from './comps/About';
import Start from './comps/Start';
import {View, Text} from 'react-native';


function App(){
  return(
    <View>
      <Contacts />
      <Start />
      <About/>
    </View>
  )
}


export default App;

