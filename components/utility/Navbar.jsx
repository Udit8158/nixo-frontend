import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const navMenu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Categories" },
    { id: 3, name: "About US", path: "/about" },
  ];
  const categoryMenu = [
    { id: "c-1", name: "Sports", path: "/category/sports", qty: 10 },
    { id: "c-2", name: "Jordon", path: "/category/jordon", qty: 12 },
    { id: "c-3", name: "Running", path: "/category/running", qty: 23 },
    { id: "c-4", name: "Fashion", path: "/category/fashion", qty: 3 },
  ];
  return (
    <div className=" border-b-2 px-6 md:px-24 lg:px-32 flex justify-between items-center h-24 md:h-16 sticky w-screen">
      {/* Logo */}
      <Link href="/">
        <img src={"./assets/logo.svg"} className="w-12 md:w-20" />
      </Link>
      {/* Nav Menu */}
      <ul className="flex justify-center items-center gap-6 md:gap-10">
        {navMenu.map((item) =>
          item.path ? (
            <Link href={item.path} key={item.id} className="md:text-xl">
              {item.name}
            </Link>
          ) : (
            <li
              key={item.id}
              className="md:text-xl cursor-pointer flex flex-col relative"
              onClick={() =>
                showCategoryMenu
                  ? setShowCategoryMenu(false)
                  : setShowCategoryMenu(true)
              }
            >
              <div className="flex items-center gap-1 justify-center">
                {item.name}{" "}
                <span>
                  <IoIosArrowDropdown />
                </span>
              </div>
              {/* Dropdown menu */}
              {showCategoryMenu && (
                <ul className="bg-gray-200 max-h-48 mt-10 overflow-auto absolute left-10 flex flex-col gap-3 py-2">
                  {categoryMenu.map((item) => (
                    <Link
                      href={item.path}
                      key={item.id}
                      className="flex justify-between gap-10 pr-4 pl-1"
                    >
                      <span className="opacity-60">{item.name}</span>{" "}
                      <span className="font-light text-white text-sm bg-blue-500 rounded-full flex justify-center items-center w-10 h-10">
                        {item.qty}
                      </span>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          )
        )}
      </ul>

      {/* Third slot (icons) */}
      <Link
        href="/cart"
        className=" w-14 h-14 rounded-full flex justify-center items-center hover:bg-slate-200"
      >
        <AiOutlineShoppingCart size="2rem" />
      </Link>
    </div>
  );
};

export default Navbar;
