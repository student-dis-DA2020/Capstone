import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import  CarList from '../components/CarList'
import { Header } from 'react-native-elements';
import styles from '../config/styles';
import colors from '../config/colors';

export default class Cars extends React.Component {
  render() {
   return (
      <View style={styles.toolbarContainer}>
        <Header
          leftComponent={{ icon: 'menu', color: 'white' }}
          rightComponent={{ text: 'CAR LINE', style: { color: 'white'} }}
          backgroundColor={colors.BLUE}
        />
        <CarList/>
      </View>
   );
  }
};