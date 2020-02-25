/*
Now that we have a button and an input field... We want to output the typed input text below the input field...
*/

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return null;
    } else {
      this.setState({
        places: this.state.places.concat(this.state.placeName),
        //  we clear the input
        placeName: ""
      });
    }
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
        <View>
          {/*Because we do not have a unique key in our array, we use the default convention "i" which stands for index to set our key*/}
          {this.state.places.map((place, i) => (
            <Text
              key={i}
              style={
                this.state.places.length !== 0
                  ? [styles.item, styles.title]
                  : null
              }
            >
              {place}
            </Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: "blue"
  },
  placeButton: {
    width: "30%"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 14,
    marginVertical: 5,
    marginHorizontal: 10
  },
  title: {
    fontSize: 20
  }
});
