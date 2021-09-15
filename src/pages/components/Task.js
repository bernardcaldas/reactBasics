import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export function Task(props){
    return (
        <View>
            <Text> {props.text} </Text>
        </View>
    )
}