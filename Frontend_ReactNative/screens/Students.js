
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StudentList from '../components/StudentList';
import styles from '../config/styles';
import { Header } from 'react-native-elements';
import colors from '../config/colors';

export default class Students extends React.Component {
  render() {
   return (
      <View style={styles.listContainer}>
        <StudentList/>
      </View>
   );
  }
};