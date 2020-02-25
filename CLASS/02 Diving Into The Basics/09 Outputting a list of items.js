/*
Now we want to render the goals user enters as a list below our input field
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
        <View>
          {this.state.courseGoals.map((goal, i) => (
            <Text key={i}>{goal}</Text>
          ))}
        </View>
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
});

export default App;
