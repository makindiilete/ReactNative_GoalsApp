/*
Here we want to style our list items because currently they look so boring..
*/

//App.js
import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class App extends React.Component {
  state = {
    enteredGoal: '',
    courseGoals: [],
  };

  goalInputHandler = enteredText => {
    this.setState({enteredGoal: enteredText});
  };

  addGoalHandler = () => {
    //we push the entered text to the array
    const newGoals = this.state.courseGoals.push(this.state.enteredGoal);
    //the array has now bin modified so we render the new list
    this.setState({courseGoals: this.state.courseGoals});
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.enteredGoal}
            onChangeText={this.goalInputHandler}
            placeholder="Course Goal"
          />
          <Button title="ADD" onPress={this.addGoalHandler} />
        </View>
        <View />
        {this.state.courseGoals.length !== 0 && (
          <View>
            {this.state.courseGoals.map((goal, i) => (
              /*Our key attribute moved to the root element i.e. the first element after the map function*/
              <View style={styles.listItem} key={i}>
                <Text>{goal}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  /*List styling*/
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default App;
