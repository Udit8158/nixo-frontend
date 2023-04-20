import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CustomButton from "../utility/CustomButton";

const HomePageCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      // onClickItem={(index) => console.log(index)}
      className="mt-9"
    >
      <div>
        <img src="./assets/slide-1.png" />
        <p className="legend cursor-pointer hidden md:block">Shop Now</p>
      </div>
      <div>
        <img src="./assets/slide-3.png" />
        <p className="legend cursor-pointer hidden md:block">Shop Now</p>
      </div>
      <div>
        <img src="./assets/slide-2.png" />
        <p className="legend cursor-pointer hidden md:block">Shop Now</p>
      </div>
    </Carousel>
  );
};

export default HomePageCarousel;
