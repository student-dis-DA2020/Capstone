import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import { observer, inject } from 'mobx-react';


class CarList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.CarLineStore.getCarLineQueueAsync();
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
        if(this.props.CarLineStore.carLineData.loading){
         return( 
           <View style={styles.listContainer}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       //render list
       return(
        <View style={styles.listContainer}>
          <FlatList
            //sort by position value (the slice stuff is req by MobX)
            data= {this.props.CarLineStore.carLineData.cars.slice().sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            )}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};

export default inject("CarLineStore")(observer(CarList));