import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const ProductSuggestionCrousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} containerClass="rounded-md" itemClass="pr-4 ">
      <ProductCard scale={false}/>
      <ProductCard scale={false}/>
      <ProductCard scale={false}/>
      <ProductCard scale={false}/>
    </Carousel>
  );
};

export default ProductSuggestionCrousel;
