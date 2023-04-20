import React from "react";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";

const MobileMenu = ({
  navMenuItems,
  categoryMenuItems,
  showCategoryMenuItems,
  setShowCategoryMenuItems,
}) => {
  return (
    <ul className="flex flex-col absolute w-screen bg-white py-8 gap-8 md:hidden">
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
              <ul className="flex flex-col py-2">
                {categoryMenuItems.map((item) => (
                  <Link
                    href={item.path}
                    key={item.id}
                    className="flex justify-between items-center  gap-10 pr-6 pl-6 border-b-2 pb-2 py-2 bg-stone-100 hover:bg-stone-200"
                  >
                    <span className="opacity-60">{item.name}</span>{" "}
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

export default MobileMenu;
