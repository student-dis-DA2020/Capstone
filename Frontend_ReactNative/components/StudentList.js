import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
import styles from '../config/styles'
import colors from '../config/colors';


export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerId: '',
            loading: true,
            students:[]
        };
    }

    updateQueue() {
        console.log('fetching cars currently in line')
        fetch(API.BASE_URL + API.CARLINE)
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
        //update queue every 3 secs
        const timerId = setInterval(() => this.updateQueue(), 3000); 
        this.setState({
            timerId: timerId 
        })
    }

    componentWillUnmount() {
        //stop the timer
        clearInterval(timerID);
    }

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {data.item._id}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {data.item.name}
                </Text>
            </View>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {'Grade: ' + data.item.grade}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {'Teacher: ' + data.item.teacher}
                </Text>
            </View>
        </TouchableOpacity>
        </View>

    render() {
        if(this.state.loading){
         return( 
           <View style={styles.listContainer}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       return(
        <View style={styles.listContainer}>
          <FlatList
            //sort by position value
            data= {this.state.students.sort((a, b) => (a.position > b.position) ? 1 : -1)}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};
