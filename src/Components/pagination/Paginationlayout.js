import React, { useState } from "react";
import "../style-component/pagination-des.css";

const Paginationlayout = ({
  postperPage,
  totalPostPerPage,
  setcurrentPage,
  currentPage,
}) => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [indexPerPage, setindexPerPage] = useState(3);
  const lastIndex = currentIndex * indexPerPage;
  var flag = true;
  const firstIndex = lastIndex - indexPerPage;

  if (lastIndex === 9) {
    flag = false;
  }
  console.log(lastIndex);
  console.log(flag);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPostPerPage / postperPage); i++) {
    pages.push(i);
  }
  var prev = false;
  if (firstIndex === 0) {
    prev = false;
  } else {
    prev = true;
  }
  const showItems = pages.slice(firstIndex, lastIndex);

  return (
    <div className="pagination-layout">
      <button
        onClick={() => {
          setcurrentIndex(currentIndex - 1);
          setcurrentPage(lastIndex - 3);
        }}
        className={prev === true ? "" : "hide"}
      >
        Previous
      </button>
      {showItems.map((page, i) => (
        <>
          <button
            onClick={() => setcurrentPage(page)}
            className={page === currentPage ? "active" : ""}
            key={i}
          >
            {page}
          </button>
        </>
      ))}

      <button
        onClick={() => {
          setcurrentIndex(currentIndex + 1);
          setcurrentPage(firstIndex + 4);
        }}
        className={flag === true ? "" : "hide"}
      >
        Next
      </button>
    </div>
  );
};

export default Paginationlayout;
