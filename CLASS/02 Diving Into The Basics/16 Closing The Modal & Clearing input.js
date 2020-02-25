/*
We will add another button to cancel our modal*/

//GoalInput.js
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, Modal} from 'react-native';
export default class GoalInput extends React.Component {
  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.props.enteredGoal}
            onChangeText={this.props.onAddGoal}
            placeholder="Course Goal"
          />
          <View style={styles.buttonContainer}>
            <View style={{marginRight: 10, width: '30%'}}>
              <Button title="ADD" onPress={this.props.addGoalHandler} />
            </View>
            <View style={{width: '30%'}}>
              <Button
                title="CANCEL"
                onPress={this.props.cancelModal}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //ds makes our modal take the full height of the page
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
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
  Alert,
} from 'react-native';
import GoalItem from './Component/GoalItem';
import GoalInput from './Component/GoalInput';

class App extends React.Component {
  state = {
    enteredGoal: '',
    courseGoals: [],
    isAddmode: false,
  };

  //this update the state "enteredGoal" with the input typed
  goalInputHandler = enteredText => {
    this.setState({enteredGoal: enteredText});
  };

  //ds add a goal to the goal list array
  addGoalHandler = () => {
    if (this.state.enteredGoal.length === 0) {
      Alert.alert('Oops', 'Your Goal Cannot Be Empty');
      return;
    }
    //Because we are now using flatList, the item we pushed now is an object with key & value properties
    //we push the entered text to the array
    const newGoals = this.state.courseGoals.push({
      key: Math.random().toString(),
      value: this.state.enteredGoal,
    });
    //the array has now bin modified so we render the new list
    this.setState({
      courseGoals: this.state.courseGoals,
      isAddmode: false,
      enteredGoal: '',
    });
  };

  //ds deletes a goal from the goal list
  deleteGoalHandler = key => {
    const deletedGoals = this.state.courseGoals.filter(
      goal => goal.key !== key,
    );
    this.setState({courseGoals: deletedGoals});
  };

  //this opens our modal
  openModalhandler = () => {
    this.setState({isAddmode: true});
  };
  //this cancel our modal
  cancelModalHandler = () => {
    this.setState({isAddmode: false});
  };
  render() {
    return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={this.openModalhandler} />
        <GoalInput
          enteredGoal={this.state.enteredGoal}
          onAddGoal={this.goalInputHandler}
          addGoalHandler={this.addGoalHandler}
          cancelModal={this.cancelModalHandler}
          visible={this.state.isAddmode}
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
