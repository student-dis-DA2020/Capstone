
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
import styles from '../config/styles'
import colors from '../config/colors';


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
    updateQueue() {
        console.log('fetching cars currently in line')
        fetch(API.BASE_URL + API.CARLINE)
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
            loading: false,
            cars: responseJson
            })
        })
        .catch(error=>console.log(error))
        
    }

    componentDidMount(){
        //update queue every 3 secs
        const timerId = setInterval(() => this.updateQueue(), 3000); 
        this.setState({
            timerId: timerId 
        });
    }

    //quit making api calls when component is unmounted
    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {data.item._id}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {data.item.cars[0]}
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
            data= {this.state.cars.sort((a, b) => (a.position > b.position) ? 1 : -1)}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};
