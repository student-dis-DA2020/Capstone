import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import { IconButton, Checkbox } from 'react-native-paper';
import { observer, inject } from 'mobx-react';


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
        <View style={styles.card}>
        <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Text style={{fontWeight: "600", fontSize: 18}}>
                        {data.item._id}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{fontWeight: "700", fontSize: 18}}>
                        {data.item.name}
                    </Text>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <IconButton
                        style={{alignSelf: 'flex-end'}}
                        icon='trash-can-outline'
                        color={colors.RED}
                        size={18}
                        onPress={() => this.deleteStudent(data.item._id)}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Checkbox style={{ }}
                        status={data.item.waiting ? 'checked' : 'unchecked'}
                        onPress={() => { this.changeWaitingStatus(data.item._id) }}/>
                </View>
                <View style={{ flex: 1, padding: 5}}>
                    <Text style={{}}>
                        {'Teacher:'}
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: "700" }}>
                        {'\t' + data.item.teacher}
                    </Text>
                </View>
                <View style={{ flex: 1, padding: 5, alignContent: 'flex-end'}}>
                    <Text style={{textAlign: 'right', marginEnd: 5}}>
                        {'Grade:'}
                    </Text>
                    <Text style={{textAlign: 'right', fontSize: 16, fontWeight: "700", marginEnd: 20 }}>
                        {'\t' + data.item.grade}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
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