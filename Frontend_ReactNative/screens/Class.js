import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { render } from 'react-dom';
import { fetchAllStudents, fetchByTeacher } from '../api';
import { Provider } from 'react-redux';
import StudentData from '../containers/studentData'

import store from '../store';
import StudentByTeacher from '../containers/StudentByTeacher';

export default class Class extends React.Component {
  
  componentDidMount(){
    console.log('fetching Jack Frost\'s Students')
    store.dispatch(fetchByTeacher('Jack Frost'));
 //  setInterval(this.printReduxStorage,10000)
  }

  render() {
   return (
      <View style={styles.container}>
          <Provider store={store}>
                <StudentByTeacher />
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