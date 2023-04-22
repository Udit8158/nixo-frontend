import React from "react";
import ProductCard from "./ProductCard";
import fetcher from "@/utils/fetchData";

const ProductCardContainer = ({ productsData }) => {
  // console.log("Products Data", productsData);
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-16 mt-2">
      {productsData?.map(({ attributes: product }) => {
        return (
          <ProductCard
            scale={true}
            key={product?.productId}
            name={product?.name}
            productId={product?.productId}
            price={product?.price}
            originalPrice={product?.originalPrice}
            subTitle={product?.subTitle}
            thumbnail={
              product?.thumbnail?.data?.attributes?.formats?.small?.url
            }
          />
        );
      })}
    </div>
  );
};

export default ProductCardContainer;
