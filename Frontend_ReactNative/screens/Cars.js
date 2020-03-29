import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import  CarList from '../components/CarList'
import { Header } from 'react-native-elements';
import styles from '../config/styles';
import colors from '../config/colors';
import AddCarForm from '../components/AddCarForm';

export default class Cars extends React.Component {
  render() {
   return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <CarList/>
        </View>
        <View style={[styles.listContainer, {flex: 1}]}>
          <AddCarForm/>
        </View>
      </View>
   );
  }
};