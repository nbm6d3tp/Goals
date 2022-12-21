import {Button, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };
  const addGoalHandler = goalInput => {
    setGoalList([...goalList, {text: goalInput, id: Math.random()}]);
    endAddGoalHandler();
  };
  const deleteItemHandler = idItem => {
    setGoalList(currentGoalList => {
      return currentGoalList.filter(item => item.id !== idItem);
    });
  };
  const cancelHandler = () => {
    endAddGoalHandler();
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add new goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          onCancel={cancelHandler}
          isVisible={isModalVisible}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalListContainer}>
          <FlatList
            data={goalList}
            keyExtractor={item => item.id}
            renderItem={itemData => (
              <GoalItem
                onDeleteItem={deleteItemHandler}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalListContainer: {
    flex: 5,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#311b6b',
  },
  buttonContainer: {
    flex: 1,
    top: 20,

    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
});
