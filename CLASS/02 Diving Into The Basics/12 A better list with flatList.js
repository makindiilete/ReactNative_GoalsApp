/*
We have used ScrollView to render our items, this is good if we know ahead of time the total number of items that our list contains e.g. 20 or 15, we can still use scrollView for this but in situations where we have huge list, scrollview can reduce performance and slow down our app because scrollview will render all items even the ones that are not currently visible on the page... So for huge list, it is better to use the FlatList component that handles infinite list or list that are potentially very long*/

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
          <FlatList
            data={this.state.courseGoals}
            renderItem={itemData => (
              <View style={styles.listItem}>
                {/*here we extract the value property we set in the array from the item property*/}
                <Text>{itemData.item.value}</Text>
              </View>
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

/*
By default, react native flat list supports "key" & "id" property to be used as the list key...But in situation where we are using something different from "key" & "id" e.g. let us assume we are using "uid", we can specify this and tell Flatlist to look for "uid" instead
*/

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
      uid: Math.random().toString(),
      value: this.state.enteredGoal,
    });
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
              <FlatList
                  data={this.state.courseGoals}
                  {/*key extractor to tell FlatList component to use a specific property as the key in this case the "uid" field*/}
                  keyExtractor={item => item.uid}
                  renderItem={itemData => (
                      <View style={styles.listItem}>
                        {/*here we extract the value property we set in the array from the item property*/}
                        <Text>{itemData.item.value}</Text>
                      </View>
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
