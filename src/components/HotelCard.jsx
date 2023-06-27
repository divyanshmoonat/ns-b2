import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const HotelCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU="
          alt="hotel"
        />
        <CardContent>
          <Typography style={{}} gutterBottom variant="h6" component="div">
            Cedar City, Utah, US
          </Typography>
          <Typography variant="body2" color="text.primary">
            $120 night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
