import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const HotelDetails = () => {
  const params = useParams();
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.slug}`)
      .then((response) => {
        console.log(response.data);
        setHotelInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.slug]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <Typography variant="h4">{hotelInfo.name}</Typography>
      <Grid container justifyContent={"center"}>
        {hotelInfo.images?.map((image) => {
          return (
            <Grid item lg={4}>
              <img
                src={image.img}
                alt="Hotel"
                style={{
                  width: "95%",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 5px grey",
                  margin: "10px",
                  height: "200px",
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HotelDetails;
