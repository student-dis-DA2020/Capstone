import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { SwipeableFlatList } from 'react-native-swipeable-flat-list';
import styles from '../config/styles'
import colors from '../config/colors';
import { observer, inject } from 'mobx-react';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class BusList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            buses: []
        }
    } 

    state = {
        buses : []
    }

    //makes a call to the api to update the list
    updateQueue = async () => {
        this.props.BusLineStore.updateQueueAsync();
        console.log('update')
        this.setState({ 
            buses: this.props.BusLineStore.buses.slice().sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            )
        });
    }

    componentDidMount() {
        this.props.BusLineStore.getBusLineQueueAsync();
        
        //this.setState() does not work on componentDidMount.
        
        //only called once because we dont want the list to update everytime.
        setTimeout(() => this.updateQueue(), 500);
    }

    moveUp = async (id) => {
        try {
            await this.props.BusLineStore.moveUpAsync(id);
        } catch (e) {
            console.log(e);
        }
    }

    moveDown = async (id) => {
        try { 
            await this.props.BusLineStore.moveDownAsync(id);
        } catch (e) {
            console.log(e);
        }
    }
 
    dismissStudent = async (id) => {
        try { 
            console.log('dismiss ' + id);
            await this.props.BusLineStore.dismissStudentAsync(id);
  
            var pos = this.props.BusLineStore.findIndexById(id) + 1;
            console.log(pos);

            var array = this.state.buses;
             
            //negative counts the position from the end of the list
            array.splice(-pos, 1);
            this.setState({buses : array});
            await this.props.BusLineStore.sendNotificationEmailAsync(id);
        } catch (e) {
            console.log(e); 
        }
    } 
    //this method renders each individual bus card
    renderItem = (data) => 
        <View style={[styles.card, styles.listItem]}>
                <View style={styles.horizontal}>
                    <Text style= {[styles.itemHeader, {flex: 1}]}>
                        {data.item._id}
                    </Text>
                    <View style={[styles.verticalCompact, {flex: 3}]}>
                        <Text style= {styles.itemHeader}>
                            {data.item.name}
                        </Text>
                        <View style={styles.horizontalCompact}>
                            <Icon name='bus' style={styles.detailIcon} size={18} />
                            <Text style={styles.detailText}>
                                {data.item.bus}
                            </Text>
                        </View>
                        <View style={styles.horizontalCompact}>
                            <Icon name='teach' style={styles.detailIcon} size={18} />
                            <Text style={styles.detailText}>
                                {data.item.teacher}
                            </Text>
                        </View>
                    </View>
                    
                    
                    <View style={[styles.verticalCompact]}>
                        <TouchableNativeFeedback
                            onPress ={() => this.dismissStudent(data.item._id)}
                            useForeground = {true}
                            style={[styles.right]}>
                            <View 
                                style={[styles.cardButton, {alignSelf: 'baseline', alignContent: 'center'}]} >
                                <Text style={styles.buttonText}>
                                    {"Dismiss"}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
        </View>

    render() {
        //render loading indicator
        if(this.props.BusLineStore.loading){
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
            data= {this.state.buses}  
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

export default inject("BusLineStore")(observer(BusList));