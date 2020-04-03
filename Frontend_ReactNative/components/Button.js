
import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from '../config/styles'

export const Button = (props) => {
    const { title, style, onPress} = props;

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};