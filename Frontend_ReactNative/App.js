import React from 'react';
import { enableScreens } from "react-native-screens"
enableScreens();
import TabNavigator from './navigators/TabNavigator';


/*This is the main class of our app
everything starts here*/
export default class App extends React.Component {
  state = {
  };

  render(){
    return (
      <TabNavigator/>
    )
  }
}
