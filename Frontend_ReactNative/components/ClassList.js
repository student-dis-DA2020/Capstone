
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
import styles from '../config/styles'
import colors from '../config/colors';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class ClassList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            students:[],
            teacher: 'Jack Frost'
        };
    }

    //makes api call to get all students/cars currently in line
    updateClass() {
        console.log('fetching students in your class');
        fetch(API.BASE_URL + API.ALL_STUDENTS + '/searchByTeacher?teacher=' + this.state.teacher)
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
            loading: false,
            students: responseJson
            })
        })
        .catch(error=>console.log(error))
    }

    componentDidMount(){
        this.updateClass();
    }

    componentWillUnmount() {
    }

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {data.item.name}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {data.item.mode}
                </Text>
            </View>
        </TouchableOpacity>
        </View>

    render() {
        //render loading indicator
        if(this.state.loading){
         return( 
           <View style={styles.listContainer}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       //render list
       return(
        <View style={styles.listContainer}>
          <FlatList
            //sort by position value
            data= {this.state.students.sort((a, b) => (a.name.localeCompare(b.name)))}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};
