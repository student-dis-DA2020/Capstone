
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Cars extends React.Component {
  render() {
   return (
      <View style={styles.container}>
          <Text>This will mirror the data from the car/id page but show student data insead of car-data....</Text>
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