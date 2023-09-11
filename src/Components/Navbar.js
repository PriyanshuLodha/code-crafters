/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Aboutcompany";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./dropdown/drop-down-des.css";
import ItemDown from "./dropdown/ItemDown";
const Navbar = () => {
  const [profile, setProfile] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbaJGkBV4kiWY_wZHxRtf1fvN0MqYJZ5JOA"
              className="img-logo"
              alt=""
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/courses">
                  <a className="nav-link active" aria-current="page">
                    Courses
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/teach">
                  <a className="nav-link active" aria-current="page">
                    Teach with Us
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/profile">
                  <a className="nav-link active" aria-current="page">
                    Profile
                  </a>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <span
                className="drop-down-des"
                onClick={() => setProfile(!profile)}
              >
                <CgProfile style={{ width: "100px", height: "40px" }} />
                {profile && <ItemDown />}
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
