import React from "react";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import "./style-component/contact-des.css";

const Contactus = () => {
  return (
    <>
      <div className="title">Contact Us</div>
      <div className="contact-us">
        <div>
          <div className="contact-about">
            <a href="https://www.instagram.com/lodha_priyanshu/">
              <GrInstagram
                style={{ height: "50px", width: "50px", color: "#d62976" }}
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919672696274">
              <ImWhatsapp
                style={{ height: "50px", width: "50px", color: "#25d366" }}
              />
            </a>
            <FaFacebook
              style={{ height: "50px", width: "50px", color: "darkblue" }}
            />
            <BsTwitter
              style={{ height: "50px", width: "50px", color: "#00acee" }}
            />
            <a href="tel:+919672696274">
              <FaPhone
                style={{
                  height: "35px",
                  width: "35px",
                  marginTop: "10px",
                  color: "white",
                }}
              />
            </a>
          </div>
          <div className="a-des">
            <a
              href="/"
              className="a-des"
              style={{ marginTop: "50px", paddingTop: "50px" }}
            >
              <a
                href="mailto:priyanshulodha181@gmail.com"
                style={{ textDecoration: "none", color: "black" }}
              >
                priyanshulodha181@gmail.com
              </a>
            </a>
            <a
              href="/"
              className="a-des"
              style={{ marginTop: "50px", paddingTop: "50px" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              +91-9672696274
            </a>
          </div>
        </div>
        <div>
          <form className="form-des">
            <p>Name:</p>
            <input type="text" placeholder="Enter your name.."></input>
            <p>Email:</p>
            <input type="text" placeholder="Enter your email.."></input>
            <p>Suggestions:</p>
            <textarea></textarea>
            <br></br>
            <input
              type="submit"
              className="submit-des"
              style={{ width: "150px" }}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
