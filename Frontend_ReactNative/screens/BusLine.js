import React from 'react';
import { View } from 'react-native';
import  BusList from '../components/BusList'
import styles from '../config/styles';

export default class BusLine extends React.Component {
  render() {
   return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <BusList/>
        </View>
      </View>
   );
  }
}
