import {
  updateProductSize,
  updateQuantityOfProduct,
  updateSubTotalPrice,
} from "@/store/cartSlice";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CartItem = ({
  name,
  productId,
  subTitle,
  price,
  thumbnail,
  qty,
  availableSizes,
  selectedSize,
}) => {
  const dispatch = useDispatch();
  let quantities = [1, 2, 3];
  if (qty > 1) {
    quantities = [qty - 1, qty, qty + 1];
  } else {
    quantities = [1, 2, 3];
  }
  return (
    <div className="flex justify-between md:bg-gray-50 p-2 md:px-6 md:py-4 rounded-md">
      <div className="flex gap-3 w-9/12">
        <img src={thumbnail} className="h-28 md:h-44" />
        <div className="flex flex-col gap-2 md:gap-14">
          <div className="flex flex-col gap-1">
            <p className="font-semibold md:text-xl">{name}</p>
            <span className="opacity-50 text-sm md:text-base">{subTitle}</span>
          </div>
          {/* TODO: Restricted size and qty */}

          <div className="flex md:items-center gap-3 opacity-50 flex-col  md:flex-row text-xs md:text-base">
            <div className="flex gap-2 items-center">
              <label htmlFor="size-select">Size</label>
              <select
                name="size-select"
                defaultValue={selectedSize}
                onChangeCapture={(e) =>
                  dispatch(
                    updateProductSize({ productId, size: e.target.value })
                  )
                }
              >
                {availableSizes.map((s) => (
                  <option key={s.size}>{s.size}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="qty-select">Quantity</label>
              <select
                name="qty-select"
                defaultValue={qty}
                onChange={(e) => {
                  dispatch(
                    updateQuantityOfProduct({
                      productId,
                      qty: Number(e.target.value),
                    })
                  );
                  dispatch(updateSubTotalPrice());
                }}
              >
                {quantities.map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-16 items-center">
        <p className="opacity-60 text-xs md:text-base">MRP &#8377; {price}</p>
        <div className="w-14 h-14 rounded-full flex justify-center items-center hover:bg-red-400 ">
          <AiOutlineDelete size={"1.5rem"} className="opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
