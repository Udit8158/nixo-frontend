import React from "react";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";

const NavMenu = ({ navMenuItems, categoryMenuItems, showCategoryMenuItems, setShowCategoryMenuItems }) => {
    
  return (
    <ul className="md:flex justify-center items-center gap-6 md:gap-10 hidden">
      {navMenuItems.map((item) =>
        item.path ? (
          <Link href={item.path} key={item.id} className="md:text-xl">
            {item.name}
          </Link>
        ) : (
          <li
            key={item.id}
            className="md:text-xl cursor-pointer flex flex-col relative"
            onClick={() =>
              showCategoryMenuItems
                ? setShowCategoryMenuItems(false)
                : setShowCategoryMenuItems(true)
            }
          >
            <div className="flex items-center gap-1 justify-center">
              {item.name}{" "}
              <span>
                <IoIosArrowDropdown />
              </span>
            </div>
            {/* Dropdown menu */}
            {showCategoryMenuItems && (
              <ul className="bg-white max-h-54 overflow-auto absolute left-2 w-60 top-8 flex flex-col py-2">
                {categoryMenuItems.map((item) => (
                  <Link
                    href={item.path}
                    key={item.id}
                    className="flex justify-between items-center gap-10 pr-4 pl-1 py-2 bg-stone-50 hover:bg-stone-200"
                  >
                    <span className="opacity-80">{item.name}</span>{" "}
                    <span className="font-light text-sm opacity-40">
                      {`(${item.qty})`}
                    </span>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        )
      )}
    </ul>
  );
};

export default NavMenu;
