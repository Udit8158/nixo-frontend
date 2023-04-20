import React from "react";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";
import MobileDropdownCategoryMenu from "./MobileDropdownCategoryMenu";

const MobileMenu = ({
  navMenuItems,
  categoryMenuItems,
  showCategoryMenuItems,
  setShowCategoryMenuItems,
}) => {
  return (
    <ul className="flex flex-col absolute w-screen bg-white py-8 gap-8 md:hidden z-50 h-full">
      {navMenuItems.map((item) =>
        item.path ? (
          <Link
            href={item.path}
            key={item.id}
            className="text-xl border-b-2 pb-2 px-2"
          >
            {item.name}
          </Link>
        ) : (
          <li
            key={item.id}
            className="text-xl cursor-pointer flex flex-col relative"
            onClick={() =>
              showCategoryMenuItems
                ? setShowCategoryMenuItems(false)
                : setShowCategoryMenuItems(true)
            }
          >
            <div
              className={`flex items-center gap-2 ${
                !showCategoryMenuItems && " border-b-2 pb-2"
              }`}
            >
              <span className='px-2'>{item.name}</span>
              <span>
                <IoIosArrowDropdown />
              </span>
            </div>
            {/* Dropdown menu */}
            {showCategoryMenuItems && (
              <MobileDropdownCategoryMenu categoryMenuItems={categoryMenuItems}/>
            )}
          </li>
        )
      )}
    </ul>
  );
};

export default MobileMenu;
