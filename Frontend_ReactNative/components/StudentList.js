import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import { IconButton, Checkbox } from 'react-native-paper';
import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class StudentList extends React.Component {
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

    deleteStudent = async (id) => {
        try {
            await this.props.CarLineStore.deleteCarAsync(id);
            //if deleted from this screen send notification email.  if you delete from the 
            //cars screen this will not send so you can fix mistakes on that screen without alerting the parents
            await this.props.CarLineStore.sendNotificationEmailAsync(id);
        } catch (e) {
            console.log(e);
        }
    }

    changeWaitingStatus = async (id) => {
        try {
            await this.props.CarLineStore.changeWaitingStatusAsync(id);
        } catch (e) {
            console.log(e);
        }
    }

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
                        <Icon name='teach' style={styles.detailIcon} size={18} />
                        <Text style={styles.detailText}>
                            {data.item.teacher}
                        </Text>
                    </View>
                    <View style={styles.horizontalCompact}>
                        <Icon name='google-classroom' style={styles.detailIcon} size={18} />
                        <Text style={styles.detailText}>
                            {'Grade '}{data.item.grade}
                        </Text>
                    </View>
                    
                </View>
                
                <View style={[styles.verticalCompact]}>
                    <TouchableNativeFeedback
                        onPress={() => this.deleteStudent(data.item._id)}
                        useForeground = {true}
                        style={[styles.right,  {flex: 1}]}>
                        <View 
                            style={[styles.cardButton]} >
                            <Text style={styles.buttonText}>
                                {"Dismiss"}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                         onPress={() => { this.changeWaitingStatus(data.item._id) }}
                        useForeground = {true}
                        style={[styles.right, {flex: 1}]}>
                        <View 
                            style={[styles.cardButton, {backgroundColor: '#CFD8DC'}]} >
                            <Text style={[styles.buttonText, {color: '#546E7A'}]}>
                            {data.item.waiting ? 'Unready' : 'Ready'}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>

    render() {
        //render loading indicator (not working)
        if(this.props.CarLineStore.loading){
         return( 
           <View style={[styles.listContainer], {justifyContent: 'center'}}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       return(
        <View style={[styles.listContainer]}>
          <FlatList
          //sort by position value (the slice stuff is req by MobX)
            data= {this.props.CarLineStore.cars.slice().sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            )}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};

export default inject("CarLineStore")(observer(StudentList));