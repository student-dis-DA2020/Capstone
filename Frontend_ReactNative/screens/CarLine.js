import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CarLine extends React.Component {
  render() {
   return (
      <View style={styles.container}>
          <Text>Car Line screen coming....</Text>
      </View>
   );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
});