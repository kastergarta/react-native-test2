import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
           <Text style={styles.title}>This is it!</Text>
            <Card style={styles.inputContainer}>              
               <Text>Select a number</Text>
               <Input style={styles.input}/>
               <View style={styles.buttonContainer}>
                   <Button style={styles.button} title='Reset' onPress={() => {}} color={Colors.accent}/>
                   <Button style={styles.button} title='Confirm' onPress={() => {}} color={Colors.primary}/>
               </View>
            </Card> 
        </View>
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
        marginVertical: 10
    },
    button: {
        width: 100
    },
    input: {

    }
})

export default StartGameScreen;