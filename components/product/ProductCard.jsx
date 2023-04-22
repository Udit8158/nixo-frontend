import { calculateDiscount } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  scale,
  name,
  productId,
  description,
  sizes,
  price,
  originalPrice,
  subTitle,
  images,
  thumbnail,
}) => {
  const discount = calculateDiscount(price, originalPrice);
  return (
    <Link
      href={"/product/product-namne"}
      className={`mt-6 transform transition-all  duration-200 ${
        scale && "hover:scale-105"
      }`}
    >
      <img src={thumbnail} className="h-80 w-full md:80 " />
      <div>
        <p>{name}</p>
        <p className='text-sm opacity-50'>{subTitle}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="opacity-60">&#8377; {price}</span>
            <span className="opacity-40 line-through">
              {" "}
              &#8377; {originalPrice}
            </span>
          </div>
          <span className="text-green-500">{discount}% off</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
