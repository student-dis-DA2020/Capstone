
import React from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Picker} from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import styles from '../config/styles'
import colors from '../config/colors';
import {List, Checkbox } from 'react-native-paper';
//import DropdownButton from 'react-bootstrap/DropdownButton'
import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class ClassList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: 'Jack Frost',
        };
    }

    //added to update the list based on the teacher selected.
    updateList = async () => {
            if(this.state.teacher == 'Lena Dunham')
            {
                this.state.teacher ='Lori Strothers'
            }
            else
            {
                this.state.teacher ='Lena Dunham';
            }
        this.props.StudentsStore.getStudentsByTeacher(this.state.teacher);
    }


    componentDidMount(){
        this.props.StudentsStore.getStudentsByTeacher(this.state.teacher);

        //update the List every 3 seconds when open
        //setInterval(() => this.updateList(), 3000);
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
       //changes here
        <View style={styles.mainContainer}>
            <View style={[styles.listContainer, {flex: 8}]}>
                <FlatList
                //sort by position value
                data= {this.props.StudentsStore.studentsData.class.slice().sort(
                (a, b) => a.mode.localeCompare(b.mode)
                    )}
                    renderItem= {item=> this.renderItem(item)}
                keyExtractor= {item=>item._id.toString()}
               />
            </View>
                  <List.Section title=" " style={{width:200}}>
                    <List.Accordion
                      title="Teachers"
                      left={props => <List.Icon {...props} icon="folder" />}
                      expanded={this.state.expanded}
                      onPress={this._handlePress}
                      style={[styles.center, {flex:0}]}
                    >
                      <List.Item title='Jack Frost' />
                      <List.Item title='Lena Dunham' />
                      <List.Item title='Lori Strothers'/>
                    </List.Accordion>
                  </List.Section>

            <TouchableNativeFeedback
                                     onPress={() => this.updateList()}
                                    useForeground = {true}
                                    style={[styles.right, {flex:0}]}>
            <View
                        style={[styles.cardButton]} >
                            <Text style={styles.buttonText}>
                                {"Search"}
                            </Text>
                    </View>
            </TouchableNativeFeedback>
        </View>


//       <TouchableNativeFeedback
//            onPress={() => this.updateList()}
//            useForeground = {true}
//            style={[styles.right, {flex:0}]}>
//            <View
//                style={[styles.cardButton]} >
//                <Text style={styles.buttonText}>
//                {"Add Car"}
//                </Text>
//                </View>
//       </TouchableNativeFeedback>
    )}
};

export default inject("StudentsStore")(observer(ClassList));