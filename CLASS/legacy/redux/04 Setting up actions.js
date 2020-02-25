/*
1)  Add a new file to the actions "actionTypes.js"... Here we will define all the action types we need : -

**  An action to add a place
**  An action to select a place
**  An action to delete a place
**  An action to unselect a place to close the modal

2)  Add a new file "places.js", this will contain our action creators (functions)
3)  Add a new file "index.js", from this file we export all our action creators in a single place
*/

//actions/actionTypes.js
export const ADD_PLACE = "ADD_PLACE";
export const DELETE_PLACE = "DELETE_PLACE";
export const SELECT_PLACE = "SELECT_PLACE";
export const DESELECT_PLACE = "DESELECT_PLACE";


//actions/places.js
import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from './actionTypes'


//This action is dispatched to add a place, replacing our placeAddedHandler
export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
};

//This action is dispatched to delete a place, replacing our placeDeletedHandler
export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
};

//This action is dispatched to deselect a place and close the modal, replacing our modalClosedHandler
export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
};

//This action is dispatched to select a place and open the modal, replacing our placeSelectedHandler
export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
};



//action/index.js
export {addPlace, deletePlace, deselectPlace, selectPlace} from "./places"

