/*
Currently if we have page contents that exceed thw height of the page, we have no scroll bar like we do on web to actual scroll up or down... This is what we will implement in this lecture
*/

//App.js
import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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
      places: this.state.places.concat(this.state.placeName)
      // placeName: ""
    });
  };

  onItemPressedHandler = Id => {
    const place = this.state.places.filter((place, i) => i !== Id);
    this.setState({ places: place });
    // alert(Id);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        {/*We replaced <View> to <ScrollView> to enable scrolling....*/}
        <ScrollView style={styles.listContainer}>
          {this.state.places.map((place, i) => (
            <ListItem
              key={i}
              placeName={place}
              onItemPressed={() => this.onItemPressedHandler(i)}
            />
          ))}
        </ScrollView>
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

/*Now we have implemented scroll view but scroll view does not perform well on slower devices this is because it loads all the Items on the page and this can eat many resources on slower devices... So we will check a better implementation in the next lecture....*/
