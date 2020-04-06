import React from 'react';
import { View } from 'react-native';
import  CarList from '../components/CarList'
// import CustomHeader from '../components/CustomHeader'
import styles from '../config/styles';
import AddCarForm from '../components/AddCarForm';

export default class Cars extends React.Component {
  render() {
   return (
      <View style={styles.mainContainer}>
        {/* <CustomHeader title='CARLINE' iconName='car'> */}
        {/* </CustomHeader> */}
        <View style={styles.listContainer}>
          <CarList/>
        </View>
        <View style={[styles.listContainer, {flex: 1}]}>
          <AddCarForm/>
        </View>
      </View>
   );
  }
};