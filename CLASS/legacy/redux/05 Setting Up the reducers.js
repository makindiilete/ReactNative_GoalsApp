/*
Here in this lecture, we want to configure our reducers
*/

//Reducers/places.js
import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from "../actions/actionTypes";

const intialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_PLACE :
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    //retrieving the placeName from the action payload of AddPlace
                    name: action.placeName,
                    //using images from the web
                    image: {
                        uri:
                            "https://drwyjmricaxm7.cloudfront.net/blog/wp-content/uploads/2019/08/Oasis-over-Sand-dunes-in-Erg-Chebbi-of-Sahara-desert-in-Morocco-Africa.jpg"
                    }
                })
            };
        case DELETE_PLACE :
            return {
                ...state,
                place : state.places.filter(
                    place => place.key !== state.selectedPlace.key
                ),
                selectedPlace: null
            };
        case SELECT_PLACE :
            return {
                ...state,
                selectedPlace : state.places.find(place => place.key === action.placeKey)
            };
        case DESELECT_PLACE: {
            return {
                ...state,
                selectedPlace: null
            }
        }
        default:
            return state;
    }
};

export default reducer;

