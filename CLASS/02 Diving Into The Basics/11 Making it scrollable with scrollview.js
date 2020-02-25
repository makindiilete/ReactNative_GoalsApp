/*
Currently if we have page contents that exceed thw height of the page, we have no scroll bar like we do on web to actual scroll up or down... This is what we will implement in this lecture
*/

//Wrapping only the list items in scrollview : - This way when we scroll, only the list item will scroll, the input field and button remain
//App.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

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
          <ScrollView>
            {this.state.courseGoals.map((goal, i) => (
              <View style={styles.listItem} key={i}>
                <Text>{goal}</Text>
              </View>
            ))}
          </ScrollView>
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
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default App;

//You can as well wrap all the page elements in scrollview so all items are scrollable
//App.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

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
      <ScrollView>
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
            <ScrollView>
              {this.state.courseGoals.map((goal, i) => (
                <View style={styles.listItem} key={i}>
                  <Text>{goal}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
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
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default App;
