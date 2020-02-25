/*
 We create a new dir inside the root folder "Component" >> Inside this dir, we add two new files : GoalInput.js : - This will house our input field and button, GoalItem.js : - This will house our rendered list*/

//GoalInput.js
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default class GoalInput extends React.Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={this.props.enteredGoal}
          onChangeText={this.props.onAddGoal}
          placeholder="Course Goal"
        />
        <Button title="ADD" onPress={this.props.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

//GoalItem.js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class GoalItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        {/*here we extract the value property we set in the array from the item property*/}
        <Text>{this.props.title}</Text>
      </View>
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
            renderItem={itemData => <GoalItem title={itemData.item.value} />}
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
