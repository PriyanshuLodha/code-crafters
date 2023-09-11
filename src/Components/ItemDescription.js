import "./style-component/item-description-des.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GrUpdate, GrLanguage } from "react-icons/gr";
import { MdCreate } from "react-icons/md";
const ItemDescription = () => {
  const item = useSelector((state) => {
    console.log(state);
    return state.FetchData.data;
  });
  return (
    <div>
      <div className="item-description-box">
        <div className="item-text">
          <div className="item-text-title">{item.name}</div>
          <div className="item-text-description">{item.description}</div>
        </div>
        <img src={item?.image} className="item-image" alt="" />
      </div>
      <div className="learn-buy">
        <div className="Features-course-des">
          <span style={{ fontFamily: "cursive", fontSize: "25px" }}>
            {" "}
            What you will learn
          </span>
          {item.CourseHighlights.map((course, i) => (
            <div className="course-points">{course}</div>
          ))}
        </div>
        <div className="buy-now-des">
          <span
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "cursive",
              justifyContent: "center",
              paddingLeft: "40%",
            }}
          >
            Buy Now
          </span>
          <div className="item-text-title">{item.name}</div>
          <div className="item-icons-des">
            <div className="item-icons-update">
              <div style={{ padding: "10px 20px" }}>
                <GrUpdate /> 7/2023
              </div>
              <div style={{ padding: "10px 20px" }}>
                <GrLanguage /> English
              </div>
              <div style={{ padding: "10px 20px" }}>
                <MdCreate /> Ankit Sharma
              </div>
            </div>
          </div>
          <button className="add-now-des-btn">Add to cart</button>
          <button className="buy-now-des-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
