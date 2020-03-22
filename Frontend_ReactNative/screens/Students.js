
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StudentList from '../components/StudentList';
import styles from '../config/styles';
import { Header } from 'react-native-elements';
import colors from '../config/colors';

export default class Students extends React.Component {
  render() {
   return (
      <View style={styles.toolbarContainer}>
        <Header
          leftComponent={{ icon: 'menu', color: 'white' }}
          rightComponent={{ text: 'CAR LINE', style: { color: 'white'} }}
          backgroundColor={colors.BLUE}
        />
        <StudentList/>
      </View>
   );
  }
};