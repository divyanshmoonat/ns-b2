import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import HotelCard from "../components/HotelCard";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const locationDetails = useLocation();
  console.log(locationDetails);

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then((response) => {
        console.log(response.data);
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
