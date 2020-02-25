/*
We will take a look at how we can include images into our list item and we change the list item a bit so that we click on a list item, we open a modal that display the item title and the image. We will hardcode the image for now but later in the course we will see how we can select images from gallery or camera. We have two different approaches of hardcoding images..
*/

//HARDCODING IMAGES FETCH FROM THE LOCAL PC STORAGE

//App.js
import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ListItem } from "./src/components/ListItem/ListItem";
import { PlaceInput } from "./src/components/placeInput/placeInput";
import placeImage from "./src/assets/26.1 beautiful-place.jpg.jpg";

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
        image: placeImage
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
