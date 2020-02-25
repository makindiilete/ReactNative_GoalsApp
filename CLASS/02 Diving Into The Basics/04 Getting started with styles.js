/*
We will be working with styles in this lectures and we will focus on inline styling first... There are various styles supported by each components react native gives us and they are different across the board depending on the component we are dealing with...

We can always check the supported styles of a component by going to https://facebook.github.io/react-native/docs >> Click the component and go to "styles"
*/

//App.js
import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <View style={{padding: 50}}>
                <View>
                    <TextInput placeholder="Course Goal" style={{borderColor: "black", borderWidth: 1, padding: 10}}/>
                    <Button title="Add"/>
                </View>
                <View>

                </View>
            </View>
        </>
    );
};

/*const styles = StyleSheet.create({

});*/

export default App;

