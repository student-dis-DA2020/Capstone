
import React from 'react';
import { View } from 'react-native';
import { Button } from './Button'
import colors from '../config/colors';
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
        this.props.CarLineStore.addCarAsync(input, this.props.CarLineStore.maxPosition + 1);
    }

    render() {
        return (
            <View style={{flex: 2, flexDirection: 'row'}}
                behavior='padding'>
                <TextInput style={{flex: 6}}
                    placeholder='Enter ID'
                    maxLength={3}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                    onChangeText={(inputValue) => this.setState({inputValue})}
                />
                <Button title='Add Car'
                    onPress={() => this.addCar(this.state.inputValue)}
                    style={[styles.addCarButton, {flex: 2}]}>
                </Button>
            </View>
        );
    }
}

export default inject("CarLineStore")(observer(AddCarForm));