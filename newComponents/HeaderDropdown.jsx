"use client";
import React, { useState } from "react";
import Link from "next/link";
import navigationData from "../data/navigationData.json";
import { ChevronDown } from "lucide-react";

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
              text-[#007c7c]
              font-bold
              relative
              py-2
              flex
            "
          >
            {menuItem.title}
            <div className="flex p-[2.75px]">
              <ChevronDown />
            </div>
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
                    hover:bg-gray-300 
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
