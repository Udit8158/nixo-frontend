import CartItem from "@/components/cart/CartItem";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((store) => store.cart.value);
  console.log(cart);

  if (cart?.data?.length > 0) {
    return (
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold mt-16">Shoping Cart</h1>

        <div className="flex flex-col lg:flex-row my-16 gap-6">
          {/* Left container */}
          <div className="lg:w-8/12">
            <h2 className="font-semibold text-xl">Cart Items</h2>
            <div className="flex flex-col gap-6">
              {cart?.data.map((item) => (
                <CartItem
                  key={item.productId}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  selectedSize={item.selectedSize}
                  subTitle={item.subTitle}
                  productId={item.productId}
                  qty={item.qty}
                />
              ))}
            </div>
          </div>
          {/* Right container */}
          <div className="flex flex-col gap-4 lg:w-4/12 md:w-6/12">
            <h2 className="font-bold text-xl">Summary</h2>
            <div className="bg-stone-300 rounded-md px-6 py-2 flex flex-col gap-10">
              <div className="flex justify-between items-center border-b-2 py-8">
                <p className="text-xl font-bold">Subtoatal</p>
                <p className="opacity-60 text-xl">
                  &#8377; {cart.subTotalPrice}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <p>
                  The total subtoatal reflects on the total price of your order
                  on cart. Including all taxes and duties.
                </p>
              </div>
            </div>
            <button className="px-6 py-3 hover:opacity-70 rounded-xl bg-black text-white  transform transition-all  duration-300 hover:scale-95">
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-3 items-center mb-8">
        <img
          src="../assets/empty-cart.jpg"
          className="w-full md:w-2/6 mx-auto"
        />
        <div className="w-5/6 md:w-4/6 flex flex-col items-center gap-4">
          <h2 className="font-bold text-xl">Your Cart is Empty</h2>
          <div className="flex flex-col items-center gap-1">
            <p className="opacity-60">
              Looks like you don't have add anything in your cart till now.
            </p>
            <p className="opacity-60">
              Go ahead and explore our top categories
            </p>
          </div>
          <Link
            href="/"
            className="px-6 py-3 hover:opacity-70 rounded-xl bg-black text-white  transform transition-all  duration-300 hover:scale-95"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
};

export default CartPage;
