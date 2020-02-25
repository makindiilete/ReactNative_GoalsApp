/*
For our modal, we will create a new component for it and name it "PlaceDetail" because it is going to carry the details of our added places
*/

//App.js
import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ListItem } from "./src/components/ListItem/ListItem";
import { PlaceInput } from "./src/components/placeInput/placeInput";
import { PlaceDetail } from "./src/components/placeDetail";

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
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

  placeSelectedHandler = key => {
    const place = this.state.places.find(place => place.key === key);
    this.setState({ selectedPlace: place });
    // alert(Id);
  };

  //This close our modal on click on the Close button
  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  //This handle on click on the Delete button on the modal, it deletes the current place from the places array...
  placeDeletedHandler = () => {
    const places = this.state.places.filter(
      place => place.key !== this.state.selectedPlace.key
    );
    this.setState({ places: places, selectedPlace: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
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
              onItemPressed={() => this.placeSelectedHandler(info.item.key)}
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

//placeDetail.js
import * as React from "react";
import { Modal, Image, Button, StyleSheet, View, Text } from "react-native";

function Separator() {
  return <View style={styles.separator} />;
}

export const PlaceDetail = props => {
  return (
    /*onRequestClosed will close the modal on android when the back button is pressed*/
    <Modal
      animationType="fade"
      visible={props.selectedPlace !== null}
      onRequestClose={props.onModalClosed}
    >
      <View style={styles.modalContainer}>
        {/*from the place selected, we pick the "placeImage" property*/}
        <Image
          source={
            props.selectedPlace !== null ? props.selectedPlace.image : null
          }
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>
          {props.selectedPlace !== null ? props.selectedPlace.name : null}{" "}
        </Text>
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Separator />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  //we add weight and height bcos our image is from web
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    marginTop: 12,
    marginBottom: 12
  },
  separator: {
    marginVertical: 8
  }
});
