import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import { fetchstudentData } from './api';
import StudentData from './containers/studentData'
import Button from './components/Button';


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

  genericButton = () => {
    console.log('button pressed')
  }


  render(){
     /*start the redux process*/
    return (
      <View style={styles.container}>
        <View>
          <Button
            backgroundColor='#A8DADC'
            color='#1F2828'
            text='My Class'
            function={() => this.genericButton()}
          />
          <Button
            backgroundColor='#A8DADC'
            color='#1F2828'
            text='Bus Line'
            function={() => this.genericButton()}
          />
          <Button
            backgroundColor='#A8DADC'
            color='#1F2828'
            text='Car Line'
            function={() => this.genericButton()}
          />
        </View>
         {/* <Provider store={store}>
                <StudentData />
          </Provider> */}
      </View>
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
