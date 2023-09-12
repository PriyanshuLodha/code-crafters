import React from "react";
import "./drop-down-des.css";
import DropItems from "./DropItems";
import { Link } from "react-router-dom";
const ItemDown = () => {
  return (
    <div className="drop-box">
      <Link
        className="drop-item-box:hover"
        to="/profile"
        style={{ textDecoration: "none", color: "black" }}
      >
        <DropItems text="View Profile" />
      </Link>
      <DropItems text="Cart Items" />
      <DropItems text="Your Courses" />
      <DropItems text="Logout" />
    </div>
  );
};

export default ItemDown;
