import React from "react";
import "./style-component/teach-des.css";
import items from "./items-carousel/teach-description.json";
const TeachCard = ({ temp }) => {
  return (
    <>
      <div className="teach-flex">
        <div className="teach-description">
          {items[temp] ? (
            // Render content when items[temp] is defined
            <div>
              {/* Your content here */}
              <p>{items[temp].description}</p>
            </div>
          ) : (
            // Handle the case when items[temp] is undefined
            <p>Item not found</p>
          )}
        </div>
        <img
          src={items[temp]?.image || ""} // Use optional chaining to handle undefined items[temp]
          alt=""
          style={{
            height: "400px",
            width: "500px",
            borderRadius: "80px",
            paddingTop: "30px",
          }}
        ></img>
      </div>
    </>
  );
};

export default TeachCard;
