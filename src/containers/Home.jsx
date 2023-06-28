import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import HotelCard from "../components/HotelCard";
import { Container } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [hotels, setHotels] = useState([]);

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
