import axios from 'axios';

export const getHotelsList = (dispatch) => {
	axios
		.get("https://hotels-api-4ltr.onrender.com/api/hotels")
		.then((response) => {
			// console.log(response.data);
			// setHotels(response.data);
			const hotelListAction = {
				type: "LISING_REDUCER:HOTEL_LISTING",
				payload: response.data,
			};

			dispatch(hotelListAction);
		})
		.catch((error) => {
			console.log(error);
		});
};
