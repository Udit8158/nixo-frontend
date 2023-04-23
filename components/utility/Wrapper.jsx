import { setAllCartData } from "@/store/cartSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// It is a wrrapper component for all of the pages used in _app.js
const Wrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartDataFromLocalStorage = localStorage.getItem("nixo-cart")
      ? JSON.parse(localStorage.getItem("nixo-cart"))
      : {
          data: [],
          subTotalPrice: 0,
        };
    dispatch(setAllCartData(cartDataFromLocalStorage));
  });
  return <div className="w-10/12 md:9/12 lg:w-8/12 mx-auto">{children}</div>;
};

export default Wrapper;
