import React from 'react';
import { enableScreens } from "react-native-screens"
enableScreens();
import TabNavigator from './navigators/TabNavigator';
import CarLineStore from './stores/CarLineStore';
import StudentsStore from './stores/StudentsStore';
import BusLineStore from './stores/BusLineStore';
import { observer, Provider } from 'mobx-react';


/*This is the main class of our app
everything starts here*/
export default class App extends React.Component {
  state = {
  };

  render(){
    return (
      <Provider CarLineStore={CarLineStore} StudentsStore={StudentsStore} BusLineStore={BusLineStore} >
        <TabNavigator/>
      </Provider>

    )
  }
}