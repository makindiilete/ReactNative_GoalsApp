/*
We learnt in the last lecture that scroll view does not perform well on slower devices this is because it loads all the Items on the page and this can eat many resources on slower devices... So we will check a better implementation in this lecture....
So the solution we want is the one that only renders what needs to be rendered that is only items on the viewing screen port and dynamically load new items as we scroll, a kind of lazy loading feature.. We can achieve this by implement "FlatList" component in react native. So we will replace our ScrollView component tag to FlatList.
*/

//App.js
import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
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
      //Because we are now using FlatList component, our handler to add a new item to the rendered list needs to change to this...
      places: this.state.places.concat({
        key: Math.random(),
        value: this.state.placeName
      })
      // placeName: ""
    });
  };

  placeDeletedHandler = key => {
    const place = this.state.places.filter(place => place.key !== key);
    this.setState({ places: place });
    // alert(Id);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeAddedHandler}
        />
        {/*We replaced <View> to <ScrollView> to enable scrolling....*/}
        <FlatList
          style={styles.listContainer}
          data={this.state.places}
          renderItem={info => (
            <ListItem
              placeName={info.item.value}
              onItemPressed={() => this.placeDeletedHandler(info.item.key)}
            />
          )}
        />
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
