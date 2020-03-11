import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
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

    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width:"100%",
                backgroundColor:colors.DARK_BLUE,
        }}
        />
        );
    }

    renderItem = (data) => 
        <TouchableOpacity style={styles.list}>
            <Text style={[styles.innerText, {textAlign: 'left'}]}>
                {data.item._id}
            </Text>
            <Text style={[styles.innerText, {textAlign: 'right'}]}>
                {data.item.cars[0]}
            </Text>
        </TouchableOpacity>

    render() {
        if(this.state.loading){
         return( 
           <View style={styles.container}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       return(
        <View style={styles.container}>
        <FlatList
           data= {this.state.cars}
           ItemSeparatorComponent = {this.FlatListItemSeparator}
           renderItem= {item=> this.renderItem(item)}
           keyExtractor= {item=>item._id.toString()}
        />
       </View>
    )}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.OFF_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  list:{
    alignSelf: 'stretch',
    paddingVertical: 4,
    margin: 2,
    color: 'white',
    backgroundColor: colors.DARK_BLUE
  },
  innerText:{
    color: 'white',
    fontSize: 18
  }
});