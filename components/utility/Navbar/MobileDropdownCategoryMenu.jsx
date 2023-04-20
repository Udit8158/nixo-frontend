import Link from "next/link";
import React from "react";

const MobileDropdownCategoryMenu = ({ categoryMenuItems }) => {
  return (
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
  );
};

export default MobileDropdownCategoryMenu;
