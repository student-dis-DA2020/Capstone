import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Cars extends React.Component {
  render() {
   return (
      <View style={styles.container}>
          <Text>This will be a list of car-id pairs one day....</Text>
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