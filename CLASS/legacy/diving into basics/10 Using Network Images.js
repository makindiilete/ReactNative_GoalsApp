/*
Here we will learn how to work with images we fetch from server/internet...
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
        name: this.state.placeName,
        //using images from the web
        image: {
          uri:
            "https://drwyjmricaxm7.cloudfront.net/blog/wp-content/uploads/2019/08/Oasis-over-Sand-dunes-in-Erg-Chebbi-of-Sahara-desert-in-Morocco-Africa.jpg"
        }
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
              placeName={info.item.name}
              placeImage={info.item.image}
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

//ListItem.js
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export function ListItem(props) {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={style.listItem}>
        <Image source={props.placeImage} style={style.placeImage} />
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
    marginTop: 5,
    //ds styles is needed to align our list item and image properly
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    //Height are weight are compulsory for images fetched from the web but optional for local images...We used height and width for both local and web images here bcos the local image we too big not bcos it is compulsory
    height: 30,
    width: 30
  }
});
