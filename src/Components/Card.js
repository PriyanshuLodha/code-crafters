import React from "react";
import "./style-component/card-des.css";
import { fetchItem } from "./actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card-design">
        <div className="card" style={{ width: "18rem", height: "30rem" }}>
          <img
            src={item.image}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="dfsf"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
          </div>
          <div className="card-body">
            <Link to="/itemdescription">
              <button
                onClick={() => {
                  dispatch(fetchItem(item));
                }}
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
