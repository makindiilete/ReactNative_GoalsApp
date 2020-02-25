/*
We want to register touch event on othe places we add to the List and remove any place we touch....
*/

//ListItem.js
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function ListItem(props) {
  return (
    /*Touchable tags allow us to wrap elements that does not support onPress (onClick for dom) events to be clickable..We have different touchable tags like TouchableOpacity, TouchableHighlight etc... View does not support onPress event so we wrap it inside touchable to to be able to bind onPress event to it*/
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={style.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    marginTop: 5
  }
});

//App.js
import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { ListItem } from "./src/components/ListItem/ListItem";
import { PlaceInput } from "./src/components/placeInput/placeInput";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  placeAddedHandler = () => {
    this.setState({
      places: this.state.places.concat(this.state.placeName),
      placeName: ""
    });
  };

  onItemPressedHandler = Id => {
    //we filter the places array and return all elements that their id (i) is not equal to the passed Id (Id)
    const place = this.state.places.filter((place, i) => i !== Id);
    this.setState({ places: place });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <View style={styles.listContainer}>
          {this.state.places.map((place, i) => (
            <ListItem
              key={i}
              placeName={place}
              onItemPressed={() => this.onItemPressedHandler(i)}
            />
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
  listContainer: {
    width: "100%"
  }
});
