import React from 'react';
import { View } from 'react-native';
import  CarList from '../components/CarList'
import styles from '../config/styles';
import AddCarForm from '../components/AddCarForm';
import { observer, inject } from 'mobx-react';

class Cars extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
   return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <CarList/>
        </View>
        <View style={[styles.addCarFormContainer, {flex: 1}]}>
          <AddCarForm/>
        </View>
      </View>
   );
  }
};

export default inject("CarLineStore")(observer(Cars));