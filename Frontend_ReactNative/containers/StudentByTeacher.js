import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import colors from '../config/colors';
import styles from '../config/styles';


//this shows all the students belonging to a particular teacher
class StudentByTeacher extends Component {

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
          <View style={[styles.listContainer, styles.horizontal]}>
            <ActivityIndicator size="large" color={colors.DARK_BLUE} />
          </View>
        )
    }
    return (
      //display all the students
      <View style={[styles.listContainer, {paddingTop:30}]}>

        <View style={{padding:10, justifyContent: 'center',alignItems : 'center'}}>
            <Text>Welcome, Jack Frost...</Text>
        </View>
        
         <ScrollView >
          {data.map(student => 
            <View style={styles.card}>
              <View style={styles.listItem} key={student._id}>
                  <Text style={[styles.innerText, {textAlign: 'left'}]}> Name: {student.name}</Text>
                  <Text style={[styles.innerText, {textAlign: 'left'}]}> Dismissal Mode: {student.mode}</Text>
              </View>
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


export default connect(mapStateToProps,null)(StudentByTeacher);