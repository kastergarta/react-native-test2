import React from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton.js';


const GameOverScreen = props => {
    return (
            <ScrollView>
                <View style={styles.screen}>
                    <BodyText>The Game is Over</BodyText>
                    <View style={styles.imageContainer}>
                        <Image 
                        source={{uri: 'https://i.guim.co.uk/img/media/6088d89032f8673c3473567a91157080840a7bb8/413_955_2808_1685/master/2808.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=412cc526a799b2d3fff991129cb8f030'}}
                        // source={require('../assets/success.png')}
                        style={styles.image}
                        resizeMode='cover'
                        />
                    </View>
                    <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
                    <BodyText>The number was: {props.userNumber}</BodyText>
                    <MainButton onPress={props.onRestart}>
                        NEW GAME
                    </MainButton>
                </View>
            </ScrollView>
        
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