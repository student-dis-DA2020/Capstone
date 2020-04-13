
import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Picker} from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import { observer, inject } from 'mobx-react';


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

    renderItem = (data) => 
        <View style={styles.card}>
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.textRow}>
                <Text style={[styles.rowItem]}>
                    {data.item.name}
                </Text>
                <Text style={[styles.rowItem, {textAlign: 'right'}]}>
                    {data.item.mode}
                </Text>
            </View>
        </TouchableOpacity>
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