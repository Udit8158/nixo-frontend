import React from "react";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";
import NavCategoryDropDownMenu from "./NavCategoryDropDownMenu";

const NavMenu = ({
  navMenuItems,
  categoryMenuItems,
  showCategoryMenuItems,
  setShowCategoryMenuItems,
}) => {
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
             <NavCategoryDropDownMenu categoryMenuItems={categoryMenuItems}/>
            )}
          </li>
        )
      )}
    </ul>
  );
};

export default NavMenu;
