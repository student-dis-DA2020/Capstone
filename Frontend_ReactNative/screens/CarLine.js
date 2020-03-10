import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { render } from 'react-dom';
import { fetchQueue, fetchByTeacher } from '../api';
import { Provider } from 'react-redux';
import CarsInQueue from '../containers/CarsInQueue'

import store from '../store';

export default class CarLine extends React.Component {
  componentDidMount(){
    console.log('fetching cars currently in line')
    store.dispatch(fetchQueue());
 //  setInterval(this.printReduxStorage,10000)
  }

  render() {
   return (
      <View style={styles.container}>
          <Provider store={store}>
                <CarsInQueue />
          </Provider> 
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