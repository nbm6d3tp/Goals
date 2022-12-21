import {StyleSheet, TextInput, Button, View, Modal, Image} from 'react-native';
import React, {useState} from 'react';

const GoalInput = ({onCancel, isVisible, onAddGoal}) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = enteredText => {
    setGoalInput(enteredText);
  };
  const addGoalHandler = () => {
    if (goalInput) {
      onAddGoal(goalInput);
      setGoalInput('');
    }
  };
  const cancelHandler = () => {
    onCancel();
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputGoalContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          placeholderTextColor="#120438"
          cursorColor="#120438"
          value={goalInput}
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} color="#5e0acc" title="Add goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={cancelHandler} color="#f31282" title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    padding: 10,
    color: '#120438',
    borderRadius: 10,
  },
  inputGoalContainer: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 10,
  },
  button: {
    padding: 5,
    marginHorizontal: 3,
  },
});
