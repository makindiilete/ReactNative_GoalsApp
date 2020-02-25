/*
Text Component : - Unlike web apps where you can place text anywhere and it will be rendered in the DOM, in react native, text can only be placed between Text tags/component i.e. <Text></Text>

View Component : - This is used to apply styles and to layout contents you have between the View tags...

In react native, you can have nested views e.g. To create our UI to render our  input field and list.. 1) We have a parent view that enclosed all elements, we then have another view inside the parent component where user enters their goals in the input field 2) We then have another view inside the parent view but not inside the input field view, this second view will render the list of goals..*/

//App.js
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <View>
                <View>
                    ......
                </View>
                <View>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({

});

export default App;
