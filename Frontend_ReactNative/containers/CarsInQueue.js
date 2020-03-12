import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import colors from '../config/colors';


//this shows all the students belonging to a particular teacher
class CarsInQueue extends Component {

  constructor(props){
    super(props);
  }

  render(){

    //get data from redux
    const {data,status,pending} = this.props;
    console.log('displaying data')

    if(!data) {//empty store
      return (
       <Text>No Data</Text>
      )
    }
    if(pending){ //loading icon
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={colors.DARK_BLUE} />
          </View>
        )
    }
    return (
      //display all the cars loaded in queue
      <View style={{paddingTop:30}}>

        <View style={{padding:10, justifyContent: 'center',alignItems : 'center'}}>
            <Text>Cars waiting in queue</Text>
        </View>
        
         <ScrollView  >
          {data.map(student => 
            
            <View style={styles.displayNames} key={student._id}>
                <Text> ID: {student._id}</Text>
                <Text> License Plate: {student.cars[0]}</Text>
            </View>
            
            )}
        </ScrollView>
      </View> 
    );
  }
}

const mapStateToProps = state => {
  return {
    data:  state.data.students,
    status: state.data.error,
    pending: state.data.pending,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  displayNames: {
    backgroundColor: colors.LIGHT_BLUE,
    padding: 5,
    borderColor: colors.BLUE,
    borderWidth: 5,
    margin: 3
  }
})
export default connect(mapStateToProps,null)(CarsInQueue);