import React from 'react';
import styles from '../styles/styles.js';
import {View, Text, Image} from 'react-native';

function Contacts(){
  return (
    <View style={styles.contactbox}>
      <Text style={styles.textStyle}>
          Deriq: 250-713-8300
          Tasha: 303-713-8303
          Angela: 303-830-9009
      </Text>
    </View>
  )
}

export default Contacts;
