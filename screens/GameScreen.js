import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton.js';
import BodyText from '../components/BodyText.js';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>Round {listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
);

const GameScreen = props => {
    
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater' && currentGuess > props.userChoice)
            ){
            Alert.alert('Wrong', 'Try one more time...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
         if (direction === 'lower') {
            currentHigh.current = currentGuess;
         } else {
            currentLow.current = currentGuess;
         }

         const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
         setCurrentGuess(nextNumber);
         //setRounds(curRounds => curRounds + 1);
         setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses])
    };

     return (
         <View style={styles.screen}>
             <Text>Opponent's Guess</Text>
             <NumberContainer>
                 {currentGuess}
             </NumberContainer>
             <Card style={styles.buttonContainer}>
                 <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                     <Ionicons name='md-remove'size={24} color='white'/>
                 </MainButton>
                 <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                     <Ionicons name='md-add'size={24} color='white'/>
                 </MainButton>
             </Card>
             <View style={styles.containerList}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList 
                keyExtractor={item => item}
                data={pastGuesses} 
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={styles.list}
                />
             </View>
         </View>
     )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '95%'
    },
    listItem: {
        borderColor: Colors.accent,
        borderWidth: 2,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    listContainer: {
        width: '80%',
        flex: 1
    },
    list: {
        alignItems: 'center'
    }
});

export default GameScreen;


