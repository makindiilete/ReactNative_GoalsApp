/*
Inline styles are good and very easy to apply but they are not recommeded for use when dealing with complex apps because as the app grows and the styles grows, it can become messy and not readable so it is preferrable to use stylesheet objects...

Another benefits of using stylesheet objects is because of the style validation react native provides so we can know if an applied style is not working and why, without stylesheet objects, the style will fail silently.

With Inline styles, you can apply same style object to multiple elements/components.
*/

//App.js
import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <View style={styles.screen}>
                <View
                    style={styles.inputContainer}>
                    <TextInput
                        placeholder="Course Goal"
                        style={styles.input}
                    />
                    <Button title="Add" />
                </View>
                <View />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
    }
});

export default App;
