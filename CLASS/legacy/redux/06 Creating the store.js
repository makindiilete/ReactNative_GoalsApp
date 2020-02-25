/*
Now that our actions and reducers are ready, we need to connect our react app to redux...
1)  Add a new file to the Store directory "configureStore.js"... This file will contain a factory function that returns a store.
*/

//configureStore.js
import {createStore, combineReducers} from "redux";
import placesReducer from "./reducers/places"


const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
    return createStore(rootReducer)
};

export default configureStore;


//index.js
/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
