/*We want to create a custom component to house our listItem...
 **  Create a "src" folder >> Inside the src folder, create "Components" folder >> Create "ListItem" folder and inside ListItem folder, create "ListItem.js"
 * */

//ListItem.js
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function ListItem(props) {
  return (
    <View style={style.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    marginTop: 5,
  },
});

//App.js
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {ListItem} from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
  };

  placeNameChangedHandler = val => {
    this.setState({placeName: val});
  };

  placeSubmitHandler = () => {
    this.setState({
      places: this.state.places.concat(this.state.placeName),
      placeName: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            placeholder="An Awesome Place"
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {this.state.places.map((place, i) => (
            <ListItem key={i} placeName={place} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});
