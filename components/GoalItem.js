import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GoalItem = ({text, id, onDeleteItem}) => {
  const deleteItemHandler = () => {
    onDeleteItem(id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#dddddd'}}
        onPress={deleteItemHandler}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#f31282',
    margin: 5,
    borderRadius: 10,
  },
  goalText: {
    color: 'white',
    padding: 10,
  },
});
