"use client";
import React, { useState } from "react";
import Link from "next/link";
import navigationData from "../data/navigationData.json";

const HeaderDropdown = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  return (
    <nav
      className="flex space-x-6"
      // Close all dropdowns when mouse leaves the entire nav
      onMouseLeave={() => setOpenMenuIndex(null)}
    >
      {navigationData.mainMenu.map((menuItem, index) => (
        <div
          key={index}
          className="relative"
          // Open dropdown when mouse enters menu item
          onMouseEnter={() => setOpenMenuIndex(index)}
        >
          <div
            className="
              hover:text-[#FFA910] 
              cursor-pointer 
              text-white
              font-medium 
              relative
              py-2
            "
          >
            {menuItem.title}
            <span
              className="
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-0.5 
                bg-[#007C7C] 
                transform 
                scale-x-0 
                group-hover:scale-x-100 
                transition-transform 
                duration-600
              "
            />
          </div>

          {/* Conditionally render dropdown content */}
          {openMenuIndex === index && (
            <div
              className="
                absolute 
                top-full 
                left-0 
                bg-white 
                shadow-lg 
                rounded-md 
                border 
                min-w-[200px] 
                z-50
              "
            >
              {menuItem.dropdownItems.map((dropdownItem, dropdownIndex) => (
                <div
                  key={dropdownIndex}
                  className="
                    hover:bg-gray-100 
                    cursor-pointer 
                    p-2
                    first:rounded-t-md 
                    last:rounded-b-md
                  "
                >
                  <Link
                    href={dropdownItem.href}
                    className="
                      block 
                      w-full 
                      text-gray-700 
                      hover:text-[#007C7C]
                    "
                  >
                    {dropdownItem.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HeaderDropdown;
