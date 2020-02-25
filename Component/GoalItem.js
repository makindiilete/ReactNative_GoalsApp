import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default class GoalItem extends React.Component {
  render() {
    return (
      /*U can set the opacity that will be applied using the "activeOpacity" attribute.. default is 0.2*/
      <TouchableOpacity onPress={this.props.onDelete} activeOpacity={0.8}>
        <View style={styles.listItem}>
          {/*here we extract the value property we set in the array from the item property*/}
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});
