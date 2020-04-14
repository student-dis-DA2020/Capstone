import React from 'react';
import { View } from 'react-native';
import  BusList from '../components/BusList'
import styles from '../config/styles';
import { observer, inject } from 'mobx-react';

class BusLine extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
   return (
      <View style={styles.mainContainer}>
        <View style={[styles.listContainer]}>
          <BusList/>
        </View>
        
      </View>
   );
  }
};

export default inject("BusLineStore")(observer(BusLine));
