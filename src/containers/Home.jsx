import Grid from "@mui/material/Grid";
import HotelCard from "../components/HotelCard";

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
