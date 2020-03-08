import React from 'react';
import { StyleSheet, View } from 'react-native';
import { enableScreens } from "react-native-screens"
enableScreens();
import { Provider } from 'react-redux';

import store from './store';
import { fetchstudentData } from './api';
import StudentData from './containers/studentData'
import Button from './components/Button';
import TabNavigator from './navigators/TabNavigator';


/*This is the main class of our app
everything starts here*/
export default class App extends React.Component {
  state = {
  };

  componentDidMount(){
    console.log('calling api')
    store.dispatch(fetchstudentData());
 //  setInterval(this.printReduxStorage,10000)
  }

  render(){
     /*start the redux process*/
    return (
      // <View style={styles.container}>
      //    {/* <Provider store={store}>
      //           <StudentData />
      //     </Provider> */}
      // </View>
      <TabNavigator/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
});
