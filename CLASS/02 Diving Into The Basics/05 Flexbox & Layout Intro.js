/*
Now we want to make sure that our button is not placed below the text input but on the right of it and to achieve thart we need to work on the layout using the View component we have wrapped our TextInput & Button with... For layout, react native uses Flexbox..

Flexbox : - This works by positioning elements inside a View above each other or beside each other. By default, it places the elements above each other in react native this is because the flex direction is set to "column" by default. So to align items side by side, we change the flex direction to "row"

justifyContent : - This is used to set alignment or space element across the horizontal axis
alignItems : - This is used to space element across the vertical axis
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
                <View style={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
                    <TextInput placeholder="Course Goal" style={{borderColor: "black", borderWidth: 1, padding: 10, width: "80%"}}/>
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

