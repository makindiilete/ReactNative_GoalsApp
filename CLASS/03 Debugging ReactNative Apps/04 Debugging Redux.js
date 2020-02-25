/*
We will learn how to configure redux tool to make it work in the react native debugger
*/

//configureStore.js
import {createStore, combineReducers, compose} from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
