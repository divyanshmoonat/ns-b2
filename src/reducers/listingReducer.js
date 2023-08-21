const initState = {
	hotelsListing: [],
	isLoading: true,
	error: {},
	filters: {}
};

/**
 * 
 * Missing info
 * 1. type : Which types of variable i want to update
 * 2. payload/data : What data should i update?
 */

export const listingReducer = (state = initState, action) => {
	// updation logic for listing object
	// immutable state updates

	switch (action.type) {
		case "LISING_REDUCER:HOTEL_LISTING":
			// hotesliting
			return {
				...state, // Last updated state
				hotelsListing: action.payload //new data (payload) to be updated
			}
		case "LISING_REDUCER:LOADING":
			// isLoading
			return {
				...state, // Last updated state
				isLoading: action.payload // new data (payload) to be updated
			}
		case "LISING_REDUCER:FILTERS":
			//filters
			return {
				...state, // Last updated state
				filters: {} // new data (payload) to be updated
			}
		default:
			return initState;
	}
};