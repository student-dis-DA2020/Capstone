import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import { SwipeableFlatList } from 'react-native-swipeable-flat-list';
import styles from '../config/styles'
import colors from '../config/colors';
import { observer, inject } from 'mobx-react';
import { IconButton } from 'react-native-paper';


class CarList extends React.Component {
    constructor(props) {
        super(props);
    }

    //makes a call to the api to update the list
    updateQueue = async () => {
        this.props.CarLineStore.updateQueueAsync();
    }

    componentDidMount() {
        this.props.CarLineStore.getCarLineQueueAsync();
        //update the queue every 3 seconds when open
        setInterval(() => this.updateQueue(), 3000);
    }

    //TODO: this never happens with react-navigation.  Always stays mounted with tabNavigator so
    //the app makes those API calls every 3 seconds until the app closes
    componentWillUnmount() {
        //quit checking the queue
        clearInterval();
    }

    deleteCar = async (id) => {
        try {
            await this.props.CarLineStore.deleteCarAsync(id);
        } catch (e) {
            console.log(e);
        }
    }

    moveUp = async (id) => {
        try {
            await this.props.CarLineStore.moveUpAsync(id);
        } catch (e) {
            console.log(e);
        }
    }

    moveDown = async (id) => {
        try {
            await this.props.CarLineStore.moveDownAsync(id);
        } catch (e) {
            console.log(e);
        }
    }
    //this method renders each individual car card
    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.textRow}>
                <View style={{flexDirection: 'column'}}>
                    <IconButton
                        icon='arrow-up-bold'
                        color={colors.BLUE}
                        size={15}
                        onPress={() => this.moveUp(data.item._id)}
                    />
                    <IconButton
                        icon='arrow-down-bold'
                        color={colors.BLUE}
                        size={15}
                        onPress={() => this.moveDown(data.item._id)}
                    />
                </View>
                <Text style={[styles.rowItem]}>
                    {data.item._id}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {data.item.cars[0]}
                </Text>
                <IconButton
                    icon='trash-can-outline'
                    color={colors.RED}
                    size={30}
                    onPress={() => this.deleteCar(data.item._id)}
                />
            </View>
        </TouchableOpacity>
        </View>

    render() {
        //render loading indicator
        if(this.props.CarLineStore.loading){
         return( 
           <View style={styles.listContainer}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       //render list
       return(
        <View style={styles.listContainer}>
          {/* <SwipeableFlatList */}
          <FlatList
            //sort by position value (the slice stuff is req by MobX)
            data= {this.props.CarLineStore.cars.slice().sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            )}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
            // renderLeft={() => (
			// 	<Text style={{ width: 40 }}>Left Label</Text>
			// )}
			// renderRight={() => (
			// 	<Text style={{ width: 100 }}>Right Label</Text>
			// )}
			// backgroundColor={'white'}
          />
       </View>
    )}
};

export default inject("CarLineStore")(observer(CarList));