import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export function Task(props){
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text> {props.text} </Text>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#E5E5E5',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15

    }

});