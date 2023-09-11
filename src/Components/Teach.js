import React from "react";
import { useState } from "react";
import "./style-component/teach-des.css";

import items from "./items-carousel/teach-description.json";
import Contactus from "./Contactus";

const Teach = () => {
  const [page, setPage] = useState("one");
  return (
    <div>
      <div className="teach-with-us">
        <div className="teach-us">
          Become a <br /> Mentor Today!!!
          <br />
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              fontSize: "30px",
              borderRadius: "10px",
            }}
          >
            Get Started
          </button>
        </div>
        <div>
          <img
            style={{ height: "500px", borderRadius: "100px" }}
            src="https://static.vecteezy.com/system/resources/previews/009/101/624/non_2x/teacher-day-concept-in-flat-design-free-vector.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div>
        <div className="how-to-begin">How to begin</div>

        <div className="teach-carousel">
          <div className="teach-nav">
            <span onClick={() => setPage("one")}>
              <div className="cursor-conflict">Mentorship Opportunities</div>
            </span>
            <span onClick={() => setPage("two")}>
              <div className="cursor-conflict">
                Qualifications and Expectations
              </div>
            </span>
            <span onClick={() => setPage("three")}>
              <div className="cursor-conflict">How to Apply</div>
            </span>
          </div>
          {page === "one" ? (
            <section>
              <div className="teach-flex">
                <div className="teach-description">
                  {items[0].description}{" "}
                  <button className="teach-description-btn">Apply Now</button>
                </div>

                <img
                  src={items[0].image}
                  alt=""
                  style={{
                    height: "400px",
                    width: "500px",
                    borderRadius: "80px",
                    paddingTop: "30px",
                  }}
                ></img>
              </div>
            </section>
          ) : page === "two" ? (
            <section>
              <div className="teach-flex">
                <div className="teach-description">
                  {items[1].description}{" "}
                  <button className="teach-description-btn">Apply Now</button>
                </div>

                <img
                  src={items[1].image}
                  alt=""
                  style={{
                    height: "400px",
                    width: "500px",
                    borderRadius: "80px",
                    paddingTop: "30px",
                  }}
                ></img>
              </div>
            </section>
          ) : (
            <section>
              <div className="teach-flex">
                <div className="teach-description">
                  {items[2].description}
                  <button className="teach-description-btn">Apply Now</button>
                </div>

                <img
                  src={items[2].image}
                  alt=""
                  style={{
                    height: "400px",
                    width: "500px",
                    borderRadius: "80px",
                    paddingTop: "30px",
                  }}
                ></img>
              </div>
            </section>
          )}
        </div>
      </div>
      <div className="employee-recruite-quote">
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/112/096/non_2x/agreement-partnership-deal-concept-office-workers-partners-standing-and-shaking-hands-after-successful-negotiations-online-illustration-free-vector.jpg"
          alt="Teach-quote"
          style={{
            width: "60%",
            height: "300px",
            marginLeft: "80px",
            marginTop: "40px",
          }}
        ></img>
        <div className="teach-description-quote">
          Join us to shape the future of Code Crafters with a team that
          celebrates diversity, encourages collaboration, and fosters growth.
        </div>
      </div>
      <Contactus />
    </div>
  );
};

export default Teach;
