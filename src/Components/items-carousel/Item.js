import React from "react";
import { Paper, Button } from "@mui/material";
import "./itemdes.css";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <Paper>
      <div className="item-des">
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "100%", height: "55vh", borderRadius: "20px" }}
        />
        <div
          className="description"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 className="head-des">{item.name}</h2>
          <Link to="/courses">
            <Button variant="contained">Check it out!</Button>
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default Item;
