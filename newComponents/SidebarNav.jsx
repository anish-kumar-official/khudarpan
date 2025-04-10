"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SidebarNav = ({ navItems, activeSection, scrollToSection }) => {
  return (
    <div className="md:w-64 w-full md:sticky md:h-screen md:top-0 bg-white shadow-md z-10 flex flex-col justify-center items-center">
      <nav className="p-4 w-full">
        <ul className="space-y-2 w-full">
          {navItems.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-300 flex items-center cursor-pointer ${
                  activeSection === section.id
                    ? "bg-orange-100 text-orange-500 font-semibold border-l-4 border-orange-500"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#007c7c] border-l-4 border-transparent"
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 hidden md:block w-full">
        <Link
          href="/contact"
          className="text-white bg-[#007c7c] hover:bg-orange-500 px-4 py-2 rounded-md inline-flex items-center justify-center w-full transition-colors"
        >
          <span className="font-bold">Contact Us</span>
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav; 