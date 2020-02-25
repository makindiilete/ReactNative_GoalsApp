import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
export default class GoalInput extends React.Component {
  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.props.enteredGoal}
            onChangeText={this.props.onAddGoal}
            placeholder="Course Goal"
          />
          <View style={styles.buttonContainer}>
            <View style={{ marginRight: 10, width: '30%' }}>
              <Button title="ADD" onPress={this.props.addGoalHandler} />
            </View>
            <View style={{ width: '30%' }}>
              <Button
                title="CANCEL"
                onPress={this.props.cancelModal}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //ds makes our modal take the full height of the page
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
