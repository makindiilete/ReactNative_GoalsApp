/*
 Now we want to be able to delete an item (goal) when we click on it*/

//GoalItem.js
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default class GoalItem extends React.Component {
  render() {
    return (
      /*U can set the opacity that will be applied using the "activeOpacity" attribute.. default is 0.2*/
      <TouchableOpacity onPress={this.props.onDelete} activeOpacity={0.8}>
        <View style={styles.listItem}>
          {/*here we extract the value property we set in the array from the item property*/}
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

//App.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import GoalItem from './Component/GoalItem';
import GoalInput from './Component/GoalInput';

class App extends React.Component {
  state = {
    enteredGoal: '',
    courseGoals: [],
  };

  goalInputHandler = enteredText => {
    this.setState({enteredGoal: enteredText});
  };

  addGoalHandler = () => {
    //Because we are now using flatList, the item we pushed now is an object with key & value properties
    //we push the entered text to the array
    const newGoals = this.state.courseGoals.push({
      key: Math.random().toString(),
      value: this.state.enteredGoal,
    });
    //the array has now bin modified so we render the new list
    this.setState({courseGoals: this.state.courseGoals});
  };

  deleteGoalHandler = key => {
    const deletedGoals = this.state.courseGoals.filter(
      goal => goal.key !== key,
    );
    this.setState({courseGoals: deletedGoals});
  };
  render() {
    return (
      <View style={styles.screen}>
        <GoalInput
          enteredGoal={this.state.enteredGoal}
          onAddGoal={this.goalInputHandler}
          onPress={this.addGoalHandler}
        />
        <View />
        {this.state.courseGoals.length !== 0 && (
          <FlatList
            data={this.state.courseGoals}
            renderItem={itemData => (
              <GoalItem
                title={itemData.item.value}
                onDelete={() => this.deleteGoalHandler(itemData.item.key)}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
