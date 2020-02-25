/*
In the last lecture, we added text input, now we will add some styling to make it stylish....
We want to remove the border we added and move the text input to the top of the page.

NOTE : - Most times, you need to wrap a react native component inside a view to be able to apply styling to them.. This is because, not all component support the style attribute so if you see that your style is not getting applied, try view..
*/

import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class App extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300 }}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder="An Awesome Place"
        />
      </View>
    );
  }
}

/*React native allows us to create css like stylesheet using objects and we can bind our elements to each properties of that object*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

/*
Create a new StyleSheet:
*/
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  title: {
    fontSize: 19,
    fontWeight: "bold"
  },
  activeTitle: {
    color: "red"
  }
});
//Use a StyleSheet:

<View style={styles.container}>
  <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
</View>;
