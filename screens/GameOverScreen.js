import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/colors';


const GameOverScreen = props => {
    return (
    
        <View style={styles.screen}>
           
            <Text>The Game is Over</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>The number was: {props.userNumber}</Text>
            <Button title='NEW GAME' onPress={props.onRestart}/>
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {   
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 8,
        padding: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.accent,
        width: 200,
        height: 200,
        marginTop: 150,
        marginLeft: 90
    }
})

export default GameOverScreen;