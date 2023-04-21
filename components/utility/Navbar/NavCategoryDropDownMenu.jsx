import Link from 'next/link'
import React from 'react'

const NavCategoryDropDownMenu = ({categoryMenuItems}) => {
  return (
    <ul className="bg-white max-h-54 overflow-auto absolute left-2 w-60 top-8 flex flex-col py-2">
    {categoryMenuItems.map((item) => (
      <Link
        href={item.path}
        key={item.id}
        className="flex justify-between items-center gap-10 pr-4 pl-4 py-2 bg-stone-50 hover:bg-stone-200 transform transition-all duration-300"
      >
        <span className="opacity-80">{item.name}</span>{" "}
        <span className="font-light text-sm opacity-40">
          {`(${item.qty})`}
        </span>
      </Link>
    ))}
  </ul>
  )
}

export default NavCategoryDropDownMenu
