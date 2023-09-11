import Carousel from "react-material-ui-carousel";
import Item from "./items-carousel/Item";
import slider from "./items-carousel/sliderContent.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carouselhome = () => {
  return (
    <Carousel>
      {slider.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Carouselhome;
