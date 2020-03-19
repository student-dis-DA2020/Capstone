import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
import styles from '../config/styles'
import colors from '../config/colors';


export default class CarLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            cars:[]
        };
    }

    componentDidMount(){
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

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <Text style={[styles.innerText, {textAlign: 'left'}]}>
                {data.item._id}
            </Text>
            <Text style={[styles.innerText, {textAlign: 'right'}]}>
                {data.item.cars[0]}
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
            data= {this.state.cars}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};
