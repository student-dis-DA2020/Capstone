import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import { IconButton } from 'react-native-paper';
import { observer, inject } from 'mobx-react';


class StudentList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.CarLineStore.getCarLineQueueAsync();
    }

    deleteStudent = async (id) => {
        try {
            await this.props.CarLineStore.deleteCarAsync(id);
        } catch (e) {
            console.log(e);
        }
    }

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {data.item._id}
                </Text>
                <Text style={[styles.rowItem]}>
                    {data.item.name}
                </Text>
                <IconButton
                    icon='trash-can-outline'
                    color={colors.RED}
                    size={30}
                    onPress={() => this.deleteStudent(data.item._id)}
                />
            </View>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {'Grade: ' + data.item.grade}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {'Teacher: ' + data.item.teacher}
                </Text>
            </View>
        </TouchableOpacity>
        </View>

    render() {
        //render loading indicator (not working)
        if(this.props.CarLineStore.loading){
         return( 
           <View style={styles.listContainer}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       return(
        <View style={styles.listContainer}>
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