import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
import styles from '../config/styles'
import colors from '../config/colors';


export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            students:[]
        };
    }

    componentDidMount(){
        console.log('fetching students currently in line')
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

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <Text style={[styles.innerText, {textAlign: 'left'}]}>
                {data.item._id}
            </Text>
            <Text style={[styles.innerText, {textAlign: 'left'}]}>
                {data.item.name}
            </Text>
            <Text style={[styles.innerText, {textAlign: 'right', float: 'right'}]}>
                {data.item.room}
            </Text>
            <Text style={[styles.innerText, {textAlign: 'right', float: 'right'}]}>
                {data.item.teacher}
            </Text>
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
            data= {this.state.students}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};
