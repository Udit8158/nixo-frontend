import Link from "next/link";
import React from "react";

const ProductCard = ({ scale }) => {
  return (
    <Link
      href={"/product/product-namne"}
      className={`mt-6 transform transition-all  duration-200 ${
        scale && "hover:scale-105"
      }`}
    >
      <img src="../../assets/p1.png" className="h-80 w-full md:80 " />
      <div>
        <p>Jordan Sports Shoe</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="opacity-70">&#8377;9999</span>
            <span className="opacity-40 line-through"> &#8377;16999</span>
          </div>
          <span className="text-green-500">47% off</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
