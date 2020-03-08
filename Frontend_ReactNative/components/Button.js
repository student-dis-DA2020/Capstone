import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default function Button(props) {
  return (
    <View>
      <TouchableHighlight
        underlayColor={'#4D6464'}
        activeOpacity={1}
        onPress={props.function}
        style={[
          styles.button,
          {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
          },
        ]}
      >
        <View>
            <Text
              style={[
                styles.text,
                { color: props.color },
              ]}
            >
              {props.text}
            </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 176,
    height: 76,
    borderRadius: 2,
    margin: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 27,
  },
});
