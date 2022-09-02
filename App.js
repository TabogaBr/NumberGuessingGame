import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {

  const [userNumber, setUserNumber] = useState('');
  const [text, setText] = useState('Guess a number between 1-100');
  const [counter, setCounter] = useState(1);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const guess = () => {
    let number = parseInt(userNumber);
    setCounter(parseInt(counter) + 1);
    if (number > secretNumber) {
      setText('Your guess ' + userNumber + ' is too high');
    } else if (number < secretNumber) {
      setText('Your guess ' + userNumber + ' is too low');
    } else if (number == secretNumber) {
      Alert.alert('You guessed the number in ' + counter + ' guesses');
      setCounter(1);
      setSecretNumber(Math.floor(Math.random() * 100) + 1);
      setText('Guess a number between 1-100');
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
      style = {[styles.textinputs, styles.margins]}
      keyboardType = 'numeric'
      onChangeText={userNumber => setUserNumber(userNumber)}
      value = {userNumber}
      />
      <Button onPress = {guess} title = "MAKE GUESS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputs: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
  margins: {
    margin: '3%',
  },
});
