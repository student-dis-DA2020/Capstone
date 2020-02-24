import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';


/*class used to display the students fetched from the api*/
class StudentData extends Component {

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
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
    }
    return (
      //display all the students
      <View style={{paddingTop:30}}>

        <View style={{padding:10, justifyContent: 'center',alignItems : 'center'}}>
            <Text>Students</Text>
        </View>
        
         <ScrollView  >
          {data.map(job => <View style={styles.displayNames} key={job._id}>
            <Text> Name: {job.name}</Text>
            <Text> ID Number: {job._id}</Text>
            
            <text> Parents Car's: 
             <select id = "myList">
             <option value = "1">{job.cars[0]}</option>
             </select></text>

            <text> Gaurdians: 
             <select id = "myList">
             <option value = "1">{job.guardians[0]}</option>
             <option value = "2">{job.guardians[1]}</option>
             </select></text>
            <Text> Room number: {job.room}</Text>
            

            </View>)}
        </ScrollView>
        {/* <View  style={styles.container}>
          <Text> error: { status }</Text>
       </View> */}
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
    padding: 5,
  }
})
export default connect(mapStateToProps,null)(StudentData);