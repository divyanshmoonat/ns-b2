import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import HotelCard from "../components/HotelCard";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsList } from "../actions/listingActions";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const locationDetails = useLocation();
  const dispatch = useDispatch();

  const listingReducer = useSelector((store) => store.listing);
  console.log("DATA FROM USESELECTOR HOOK", listingReducer);
  console.log(locationDetails);

  const hotelListLoadingAction = {
    type: "LISING_REDUCER:LOADING",
    payload: false,
  };

  useEffect(() => {
    getHotelsList(dispatch);
  }, []);

  return (
    <div className="home-component">
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4">
          Welcome {locationDetails?.state?.userName}
        </Typography>
        <Grid container spacing={2}>
          {listingReducer.hotelsListing.map((hotel) => {
            return (
              <Grid key={hotel.id} item md={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
