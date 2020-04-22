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

    }

    componentDidMount() {
        this.props.BusLineStore.getBusLineQueueAsync();
    }

    /**    deleteBus = async (id) => {
        try {
            await this.props.BusLineStore.deleteBusAsync(id);
        } catch (e) {
            console.log(e);
        }
    }
 */

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
            await this.props.BusLineStore.changeDismissStatusAsync(id)
            await this.props.BusLineStore.sendNotificationEmailAsync(id)
        } catch (e) {
            console.log(e);
        }
    } 
    //this method renders each individual bus card
    renderItem = (data) => 
        <View style={styles.card}>
                <View style={styles.horizontal}>
                    <Text style= {styles.studentName}>
                        {data.item._id}
                    </Text>
                    <View style={styles.verticalCompact}>
                        <Text style= {styles.studentName}>
                            {data.item.name}
                        </Text>
                        <View style={styles.horizontalCompact}>
                            <Icon name='bus' style={styles.detailIcon} size={18} />
                            <Text>
                                {data.item.bus}
                            </Text>
                        </View>
                        <View style={styles.horizontalCompact}>
                            <Icon name='teach' style={styles.detailIcon} size={18} />
                            <Text>
                                {data.item.teacher}
                            </Text>
                        </View>
                    </View>
                    
                    <TouchableNativeFeedback
                        onPress ={() => this.dismissStudent(data.item._id)}
                        useForeground = {true}
                        style={[styles.right, {flex:0}]}>
                        <View 
                            style={[styles.cardButton, {marginVertical:10}]} >
                            <Text style={styles.buttonText}>
                                {"Dismiss"}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
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
            data= {this.props.BusLineStore.buses.slice().sort(
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

export default inject("BusLineStore")(observer(BusList));