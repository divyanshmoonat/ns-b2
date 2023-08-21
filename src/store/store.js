// import { createStore } from "redux"; // Old deprecated method to create store
import { configureStore } from "@reduxjs/toolkit"; // Correct and new method to create store
import { listingReducer } from '../reducers/listingReducer'
import { detailsReducer } from "../reducers/detailsReducer";

const combinedReducers = {
	listing: listingReducer,
	details: detailsReducer,
};

// Store is just a plain js object
const store = configureStore({
	reducer: combinedReducers
});

export default store;