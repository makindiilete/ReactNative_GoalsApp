/*
Currently we have 3 properties inside our state and our state is managed inside App.js... We will move these properties to redux leaving only the place name behind because the placeName is not really important application wide, it is only needed in the placeInput component...

1)  Install redux and react redux
2)  Create a new dir in the root folder "store" >>> Create two folders inside Store "reducers" & "action"
3)  Inside reducers folder, add a new file "places.js"
*/

//places.js
const intialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
