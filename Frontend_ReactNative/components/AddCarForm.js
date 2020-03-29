
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import API from '../config/environment'
import styles from '../config/styles'
import colors from '../config/colors';
import { TextInput } from 'react-native-paper';

export default class AddCarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : -1,
        };
    }

    render() {
        return (
            <View style={{flex: 2}}>
                <TextInput
                    placeholder='Enter ID'
                    maxLength={3}
                />
            </View>
        );
    }

}