
import React, { useState } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Button } from './Button'
import styles from '../config/styles'
import { TextInput } from 'react-native-paper';
import { observer, inject } from 'mobx-react';

class AddCarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : "0",
        };
    }
    
    componentDidMount(){
    }

    addCar = async (input) => {
        await this.props.CarLineStore.addCarAsync(input, this.props.CarLineStore.maxPosition + 1);
    }

    render() {
        return (
            <View style={{flex: 2, flexDirection: 'row'}}
                behavior='padding'>
                <View style={[styles.cardButton, {flex: 2, flexDirection: 'row', marginBottom: 14, backgroundColor: "white", padding: 2}]}>
                <TextInput style={[{flex: 6, height: 50, justifyContent: 'center', backgroundColor: "transparent"}]}
                    placeholder='Enter ID'
                    co
                    maxLength={3}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                    underlineColor='rgba(0,0,0,0)'
                    onChangeText={(inputValue) => this.setState({inputValue})}
                />
                <TouchableNativeFeedback
                         onPress={() => this.addCar(this.state.inputValue)}
                        useForeground = {true}
                        style={[styles.right, {flex:0}]}>
                    <View 
                        style={[styles.cardButton]} >
                            <Text style={styles.buttonText}>
                                {"Add Car"}
                            </Text>
                    </View>
                </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

export default inject("CarLineStore")(observer(AddCarForm));