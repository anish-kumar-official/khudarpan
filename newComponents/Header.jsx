import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeaderDropdown from "../newComponents/HeaderDropdown";

const Header = () => {
  return (
    <div
      className="sticky 
        top-0 
        left-0 
        w-full 
        bg-white 
        shadow-md 
        z-50 
        flex 
        flex-col 
        justify-between 
        p-2 
        sm:px-6 
        lg:px-8
      "
    >
      <div className="upperHeader flex justify-end items-center mb-2">
        <Button className="shadow-md bg-green-500 text-white cursor-pointer">
          Support a Cause
        </Button>
      </div>
      <div className="lowerHeader flex justify-between items-center space-x-8  rounded-3xl">
        <div className="logo flex-shrink-0">
          <Image
            src="/Logo/mainLogo.jpeg"
            width={150}
            height={150}
            alt="Khudarpan Logo Loading..."
            className="object-contain"
          />
        </div>
        <div className="flex-grow flex justify-center items-baseline bg-[#007C7C] rounded-2xl">
          <HeaderDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
