import React from 'react';
import { Header } from 'react-native-elements';
import colors from '../config/colors'
import styles from '../config/styles'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class CustomHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header
                placement="left"
                backgroundColor={colors.BLUE}
                leftComponent={{ icon: this.props.icon, color: 'white' }}
                centerComponent={{ text: this.props.title, style: styles.buttonText }}
                rightComponent={{style: styles.buttonText}}
            />
        );
    };
};