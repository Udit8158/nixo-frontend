import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const ProductSuggestionCrousel = ({ sameSubTitleProducts }) => {
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
    <Carousel
      responsive={responsive}
      containerClass="rounded-md"
      itemClass="pr-4 "
    >
      {sameSubTitleProducts?.map(({ attributes: product }) => (
        <ProductCard
          scale={false}
          key={product?.productId}
          name={product?.name}
          productId={product?.productId}
          price={product?.price}
          originalPrice={product?.originalPrice}
          subTitle={product?.subTitle}
          thumbnail={product?.thumbnail?.data?.attributes?.formats?.small?.url}
        />
      ))}
    </Carousel>
  );
};

export default ProductSuggestionCrousel;
