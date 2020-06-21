import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';


const StartGameScreen = props => {

const [enteredValue, setEnteredValue] = useState('');
const [confirmed, setConfirmed] = useState(false);
const [selectedNumber, setSelectedNumber] = useState('');

const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
}

const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(true)
} 

const confirmInputHandler = () => {
  
  const chosenNumber = parseInt(enteredValue);
  if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Retype!', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
      return;
  }   
  
  setConfirmed(true);
  setSelectedNumber(chosenNumber);
  setEnteredValue('');
}

let confirmedOutput;

if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                START GAME
            </MainButton>
      </Card>
    );
}

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>This is it!</Text>
                <Card style={styles.inputContainer}>              
                    <Text>Select a number</Text>
                    <Input 
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <Button 
                            style={styles.button} 
                            title='Reset' 
                            onPress={resetInputHandler} 
                            color={Colors.accent}
                        />
                        <Button 
                            style={styles.button} 
                            title='Confirm' 
                            onPress={confirmInputHandler} 
                            color={Colors.primary}
                        />
                    </View>
                </Card> 
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    button: {
        width: 100
    },
    input: {
        textAlign: 'center',
        width: 50
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen;