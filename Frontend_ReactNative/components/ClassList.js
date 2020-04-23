
import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Picker} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class ClassList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: 'Jack Frost',
        };
    }

    componentDidMount(){
        this.props.StudentsStore.getStudentsByTeacher(this.state.teacher);
    }

    componentWillUnmount() {
    } 

    changeModeIcon(data){
        if (data.item.mode == 'BUS') {
            return 'bus-side'
        } else if (data.item.mode == 'CAR') {
            return 'car-side'
        } else if (data.item.mode == 'WALK') {
            return 'walk'
        } else {
            return 'car'
        }
    }

    renderItem = (data) => 
        <View style={[styles.card, styles.listItem]}> 
            <View style={styles.horizontal}>
                <Text style={[styles.itemHeader, {flex: 1}]}>
                        {data.item._id}
                </Text>
                <View style={[styles.verticalCompact, {flex: 3}]}>
                    <Text style={[styles.itemHeader]}>
                        {data.item.name}
                    </Text>
                    <View style={styles.horizontalCompact}>
                        <Icon name='google-classroom' style={styles.detailIcon} size={18} />
                        <Text style={styles.detailText}>
                            {'Grade '}{data.item.grade}
                        </Text>
                    </View>
                    <View style={styles.horizontalCompact}>
                        <Icon name='human-male-girl' style={styles.detailIcon} size={18} />
                        <FlatList
                            data={data.item.guardians}
                            renderItem={({item}) => <Text style={styles.detailText}>{item}</Text>}
                            keyExtractor= {item=>item._id}
                            />
                    </View>
                    
                </View>
                <View style={styles.horizontalCompact}>
                        <Icon name={this.changeModeIcon(data)} style={styles.detailIcon} size={22} />
                        <Text style={styles.itemHeader}>
                            {data.item.mode}
                        </Text>
                </View>
            </View>
        </View>

    render() {
        //render loading indicator 
        if(this.props.StudentsStore.loading){
         return( 
           <View style={styles.listContainer}> 
             <ActivityIndicator size="large" color={colors.BLUE}/>
           </View>
       )}
       //render list
       return(
        <View style={styles.listContainer}>  
          <FlatList
            //sort by position value
            data= {this.props.StudentsStore.studentsData.class.slice().sort(
                (a, b) => a.mode.localeCompare(b.mode)
            )}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item._id.toString()}
          />
       </View>
    )}
};

export default inject("StudentsStore")(observer(ClassList));