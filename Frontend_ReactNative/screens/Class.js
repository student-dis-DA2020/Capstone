import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../config/styles'
import ClassList from '../components/ClassList'

export default class Class extends React.Component {
  
  render() {
   return (
      <View style={styles.listContainer}>
          <ClassList/>
      </View>
   );
  }
};
