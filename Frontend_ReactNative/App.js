import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import { fetchstudentData } from './api';
import StudentData from './containers/studentData'


/*This is the main class of our app
everything starts here*/
export default class App extends React.Component {

  componentDidMount(){
    console.log('calling api')
    store.dispatch(fetchstudentData());
 //  setInterval(this.printReduxStorage,10000)
  }


  render(){
     /*start the redux process*/
    return (
      <View style={styles.container}>
         <Provider store={store}>
                <StudentData />
          </Provider>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
