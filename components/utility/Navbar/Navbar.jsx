import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showCategoryMenuItems, setShowCategoryMenuItems] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navMenuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Categories" },
    { id: 3, name: "About Us", path: "/about" },
    { id: 4, name: "Contact Us", path: "/contact" },
  ];
  const categoryMenuItems = [
    { id: "c-1", name: "Sports", path: "/category/sports", qty: 10 },
    { id: "c-2", name: "Jordon", path: "/category/jordon", qty: 12 },
    { id: "c-3", name: "Running", path: "/category/running", qty: 23 },
    { id: "c-4", name: "Fashion", path: "/category/fashion", qty: 3 },
  ];
  return (
    <>
      <div className=" border-b-2 px-6 md:px-24 lg:px-32 flex justify-between items-center h-24 md:h-16 sticky w-screen top-0 z-50 bg-white">
        {/* Logo */}
        <Link href="/">
          <img src={"./assets/logo.svg"} className="w-12 md:w-20" />
        </Link>
        {/* Nav Menu */}
        <NavMenu
          navMenuItems={navMenuItems}
          categoryMenuItems={categoryMenuItems}
          showCategoryMenuItems={showCategoryMenuItems}
          setShowCategoryMenuItems={setShowCategoryMenuItems}
        />

        {/* Third slot (icons) */}
        <div className="flex justify-center items-center gap-5">
          {/* Add to cart icon */}
          <Link
            href="/cart"
            className=" w-14 h-14 rounded-full flex justify-center items-center hover:bg-stone-100"
          >
            <AiOutlineShoppingCart size="2rem" />
          </Link>

          {/* Controll mobile menu opening and closing */}
          {/* TODO: Size of hambugger and close icons problem when adjust hover rounded effect */}
          {showMobileMenu ? (
            <AiOutlineClose
              size={"2rem"}
              className="cursor-pointer md:hidden"
              onClick={() => setShowMobileMenu(false)}
            />
          ) : (
            <RxHamburgerMenu
              size={"2rem"}
              className="cursor-pointer md:hidden"
              onClick={() => setShowMobileMenu(true)}
            />
          )}
        </div>
        {/* ------- */}
      </div>
      {/* Mobile menu */}
      {showMobileMenu && (
        <MobileMenu
          navMenuItems={navMenuItems}
          categoryMenuItems={categoryMenuItems}
          showCategoryMenuItems={showCategoryMenuItems}
          setShowCategoryMenuItems={setShowCategoryMenuItems}
        />
      )}
    </>
  );
};

export default Navbar;
