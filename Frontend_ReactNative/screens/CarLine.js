import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { render } from 'react-dom';
import { fetchQueue, fetchByTeacher } from '../api';
import { Provider } from 'react-redux';
import CarsInQueue from '../containers/CarsInQueue'
import CarList from '../components/CarList'

import store from '../store';
import colors from '../config/colors';
import styles from '../config/styles';

export default class CarLine extends React.Component {
//   componentDidMount(){
//     console.log('fetching cars currently in line')
//     store.dispatch(fetchQueue());
//  //  setInterval(this.printReduxStorage,10000)
//   }

  render() {
   return (
      // <View style={styles.container}>
      //     <Provider store={store}>
      //           <CarsInQueue />
      //     </Provider> 
      // </View>
      <View style={styles.toolbarContainer}>
        <Header
          leftComponent={{ icon: 'menu', color: 'white' }}
          centerComponent={{ text: 'CAR LINE', style: { color: 'white' } }}
          rightComponent={{ icon: 'home', color: 'white' }}
          backgroundColor={colors.BLUE}
        />
        <CarList/>
      </View>
   );
  }
};
