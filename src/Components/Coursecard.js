import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchItem } from "./actions";
import "./style-component/card-des.css";
export default function Coursecard({ item }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345, height: 400 }} className="card-design">
      <CardMedia sx={{ height: 140 }} image={item.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          style={{ fontFamily: "cursive", fontSize: "20px" }}
          component="div"
        >
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/itemdescription`}>
          <Button
            size="small"
            onClick={() => {
              console.log(item);
              dispatch(fetchItem(item));
            }}
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
