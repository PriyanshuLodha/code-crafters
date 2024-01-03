import React, { useEffect } from "react";
// import items from "./items-carousel/allCourses.json";
import Coursecard from "./Coursecard";
import "./style-component/course-des.css";
import Paginationlayout from "./pagination/Paginationlayout";
import { useState } from "react";
import axios from "axios";
const Courses = () => {
  const [curentPage, setcurrentPage] = useState(1);
  const [postperPage, setpostperPage] = useState(6);
  const [coursedata, setcourseData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9191/api/course/getcourses")
      .then((response) => {
        setcourseData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const lastpageContent = curentPage * postperPage;
  const firstpageContent = lastpageContent - postperPage;
  const data = coursedata.slice(firstpageContent, lastpageContent);
  return (
    <>
      <div className="course-design">
        {data.map((item, i) => (
          <div style={{ marginTop: "40px" }}>
            <Coursecard
              className={{ paddingTop: "100px" }}
              item={item}
              key={i}
            />
          </div>
        ))}
      </div>
      <Paginationlayout
        totalPostPerPage={coursedata.length}
        postperPage={postperPage}
        setcurrentPage={setcurrentPage}
        currentPage={curentPage}
      />
    </>
  );
};

export default Courses;
