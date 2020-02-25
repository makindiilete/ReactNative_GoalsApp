/*

*/

//App.js
import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ListItem } from "./src/components/ListItem/ListItem";
import { PlaceInput } from "./src/components/placeInput/placeInput";
import { PlaceDetail } from "./src/components/placeDetail";
import connect from "react-redux/lib/connect/connect";
import {selectPlace, deselectPlace, deletePlace, addPlace} from "./store/actions/index"

class App extends Component {
    state = {
        placeName: "",
    };

    placeNameChangedHandler = val => {
        this.setState({ placeName: val });
    };

    placeAddedHandler = () => {
        //we call the actionCreators responsible for adding a place via props
        this.props.onAddPlace(this.state.placeName)
    };

    placeSelectedHandler = key => {
        //we call the actionCreators responsible for selecting a place via props
        this.props.onSelectPlace(key)
    };

    //This close our modal on click on the Close button
    modalClosedHandler = () => {
        //we call the actionCreators responsible for deselecting a place via props
        this.props.onDeselectPlace()
    };

    //This handle on click on the Delete button on the modal, it deletes the current place from the places array...
    placeDeletedHandler = () => {
        //we call the actionCreators responsible for deleting a place via props
        this.props.onDeletePlace();
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput
                    placeName={this.props.placeName}
                    placeNameChangedHandler={this.placeNameChangedHandler}
                    placeSubmitHandler={this.placeAddedHandler}
                />
                {/*We replaced <View> to <ScrollView> to enable scrolling....*/}
                <FlatList
                    style={styles.listContainer}
                    data={this.props.places}
                    renderItem={info => (
                        <ListItem
                            placeName={info.item.name}
                            placeImage={info.item.image}
                            onItemPressed={() => this.placeSelectedHandler(info.item.key)}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    listContainer: {
        width: "100%"
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

//Here we call each of our action creators to dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
