import React from "react";
import "./style-component/about-des.css";

const About = () => {
  return (
    <div id="aboutus">
      <div className="about-company">
        <section>
          <div className="about-us">About Us</div>
        </section>
        <div className="about-main">
          {/* <img
            style={{ height: "200px", width: "200px" }}
            className="about-us"
            src="https://online.usm.edu/wp-content/uploads/2017/06/StudentSuccessVectorWebAT.jpg"
            alt=""
          /> */}
          <div>
            <iframe
              width="424"
              height="238"
              style={{ marginLeft: "20px" }}
              src="https://www.youtube.com/embed/4Z-XNKpbC-I?autoplay=2 "
              title="Squideo | What We Do"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="description">
            At EdTech Factory , we're dedicated to nurturing the skills and
            aspirations of software engineers. With a passion for learning and a
            commitment to excellence, we've crafted a unique platform that
            empowers tech enthusiasts to reach their full potential.
            <br /> <br /> Our mission is to bridge the gap between aspiration
            and achievement. We believe that every software engineer has the
            potential to innovate, create, and excel in their chosen field.
            That's why we've made it our mission to provide world-class,
            accessible, and practical education that empowers you to succeed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
