
import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity, Button, KeyboardAvoidingView} from 'react-native';
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
            <KeyboardAvoidingView style={{flex: 2, flexDirection: 'row'}}
                behavior='padding'>
                <TextInput style={{flex: 6}}
                    placeholder='Enter ID'
                    maxLength={3}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                />
                <Button title='Add Car'
                    color={colors.BLUE}
                    style={{flex: 1}}>
                </Button>
            </KeyboardAvoidingView>
        );
    }

}