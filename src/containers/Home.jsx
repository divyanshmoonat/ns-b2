import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import HotelCard from "../components/HotelCard";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const locationDetails = useLocation();
  const dispatch = useDispatch();

  console.log(locationDetails);

  // useEffect(() => {
  //   axios
  //     .get("https://hotels-api-4ltr.onrender.com/api/hotels")
  //     .then((response) => {
  //       console.log(response.data);
  //       setHotels(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const hotelsDummyList = [
    {
      id: 1,
      name: "Zion Kolob Canyon-Farm Stay-cows, goats, alpaca",
      address: "Cedar City, Utah, Us",
      slug: "zion-kolob-canyon-farm-stay-cows-goats-alpaca",
      rating: 5,
      pricePerNight: 120,
      thumbnail:
        "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg?im_w=720",
      images: [
        {
          id: 1,
          img: "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/8ef7a4b0-79b0-439c-9da0-4a170ad4090d.jpeg?im_w=960",
        },
        {
          id: 2,
          img: "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/4e36f28d-27cf-4bea-b473-c83ddec5fb9b.jpeg?im_w=720",
        },
        {
          id: 3,
          img: "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/ba5fb19b-3986-442f-8fda-9c64c812ffd2.jpeg?im_w=720",
        },
        {
          id: 4,
          img: "https://a0.muscache.com/im/pictures/3e298f84-f658-4423-8edf-fad0254cacf9.jpg?im_w=1200",
        },
        {
          id: 5,
          img: "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/20f1b109-4612-4b70-ac6d-025727c305a4.jpeg?im_w=720",
        },
        {
          id: 6,
          img: "https://a0.muscache.com/im/pictures/miso/Hosting-740634701378172939/original/273e9f6a-1608-4f7a-8bed-477a5259b38f.jpeg?im_w=720",
        },
      ],
      aboutThePlace:
        "Escape the busy life and relax in the countryside in Beautiful Kanarraville, UT. Our Friendly cows will meet you off your private back patio! This serene, private guest home on our family ranch is just 9 miles south of Cedar City. Enjoy our friendly farm animals, orchard, and seasonal garden. Minutes from Kanarraville Falls, Spring Creek, and other trails. 10 min from Zion's North Entrance. Central location to other Parks: Capitol Reef, Bryce Canyon, Grand Canyon, Arches, Canyonlands.",
      features: [
        {
          id: 1,
          text: "Desert View",
        },
        {
          id: 2,
          text: "Fast wifi-94Mbps",
        },
        {
          id: 3,
          text: "Free parking on premises",
        },
        {
          id: 4,
          text: "65 HDTV with Roku, Hulu, Disney+, Netflix, Apple TV, Amazon Prime Video, Fire TV, HBO Max, Chromecast",
        },
        {
          id: 5,
          text: "Garden view",
        },
        {
          id: 6,
          text: "AC – split-type ductless system",
        },
        {
          id: 7,
          text: "Private back garden – Fully fenced",
        },
      ],
      rooms: [
        {
          id: 1,
          content: "6 guests",
        },
        {
          id: 2,
          content: "1 bedroom",
        },
        {
          id: 3,
          content: "3 beds",
        },
        {
          id: 4,
          content: "1 bathroom",
        },
      ],
    },
  ];

  const hotelListAction = {
    type: "LISING_REDUCER:HOTEL_LISTING",
    payload: hotelsDummyList,
  };

  const hotelListLoadingAction = {
    type: "LISING_REDUCER:LOADING",
    payload: false,
  };

  dispatch(hotelListAction);

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4">
          Welcome {locationDetails?.state?.userName}
        </Typography>
        <Grid container spacing={2}>
          {hotels.map((hotel) => {
            return (
              <Grid key={hotel.id} item md={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
