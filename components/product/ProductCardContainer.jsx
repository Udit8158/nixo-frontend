import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-16 mt-2">
      <ProductCard scale={true} />
      <ProductCard scale={true} />
      <ProductCard scale={true} />
      <ProductCard scale={true} />
      <ProductCard scale={true} />
      <ProductCard scale={true} />
    </div>
  );
};

export default ProductCardContainer;
