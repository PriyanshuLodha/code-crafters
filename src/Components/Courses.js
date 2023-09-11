import React from "react";
import items from "./items-carousel/allCourses.json";
import Coursecard from "./Coursecard";
import "./style-component/course-des.css";
import Paginationlayout from "./pagination/Paginationlayout";
import { useState } from "react";
const Courses = () => {
  const [curentPage, setcurrentPage] = useState(1);
  const [postperPage, setpostperPage] = useState(6);

  const lastpageContent = curentPage * postperPage;
  const firstpageContent = lastpageContent - postperPage;
  const data = items.slice(firstpageContent, lastpageContent);
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
        totalPostPerPage={items.length}
        postperPage={postperPage}
        setcurrentPage={setcurrentPage}
        currentPage={curentPage}
      />
    </>
  );
};

export default Courses;
