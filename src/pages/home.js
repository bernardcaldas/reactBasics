import React from 'react';
import { Task } from './components/Task';
const imgBackground = {
    uri: 'https://images.pexels.com/photos/6964961/pexels-photo-6964961.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'};

import { 
    View,
    StyleSheet,
    Text,
    ImageBackground,
    ScrollView
} from 'react-native';

export function Home(){
    return(
        
        <View>
            <ImageBackground
                source={imgBackground}
                style={{width: '100%', height: 200}}
                imageStyle={{borderBottomRightRadius: 30}}
                >

                <View style={styles.darkverlay}></View>
                <View style={styles.containerUsername}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}> Hi Bernardo </Text>

                </View>
                
                
            </ImageBackground>
            <View style={styles.taskWrapper}>
                <Text style={{fontSize: 30, fontWeight: 'bold', paddingTop: 20 , paddingLeft: 15}}> Tasks </Text>
                <View>
                    <Task text={'task 1'}/>
                    <Task text={'task 2'}/>
                    <Task text={'task 3'}/>

                </View>

            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    darkverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 200,
        backgroundColor: '#000',
        opacity: 0.5,
        borderBottomRightRadius: 30,
    },
    containerUsername: {
        paddingTop: 100,
        paddingLeft: 16,
    
    },
    taskWrapper: {

    }
  });
  