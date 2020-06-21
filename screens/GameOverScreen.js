import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import Colors from '../constants/colors';
import BodyText from '../components/BodyText';


const GameOverScreen = props => {
    return (
    
        <View style={styles.screen}>
            <BodyText>The Game is Over</BodyText>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../assets/success.png')}
                style={styles.image}
                resizeMode='cover'
                />
            </View>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>The number was: {props.userNumber}</BodyText>
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
        // borderRadius: 15,
        // borderWidth: 2,
        // borderColor: Colors.accent,
        // width: 200,
        // height: 200,
        // marginTop: 150,
        // marginLeft: 90
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'purple',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    }
})

export default GameOverScreen;