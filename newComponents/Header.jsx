import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeaderDropdown from "../newComponents/HeaderDropdown";
import Link from "next/link";

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
      <div className="upperHeader flex items-center mb-2">
        <div className="w-full flex justify-center items-center">
          <div className="font-bold text-[#007c7c]">We live F</div>
          <div className="font-bold text-[#ffa910]">or Others !</div>
        </div>
      </div>
      <div className="lowerHeader flex justify-between items-center space-x-8">
        <Link href="/">
          <Image
            src="/Logo/mainLogo.jpeg"
            width={150}
            height={150}
            alt="Khudarpan Logo Loading..."
            className="object-contain"
          />
        </Link>
        <div className="flex-grow flex justify-center">
          <HeaderDropdown />
        </div>
        <Button className="shadow-md bg-[#007c7c] text-white cursor-pointer hover:bg-[#ffa910] hover:text-black">
          Support a Cause
        </Button>
      </div>
    </div>
  );
};

export default Header;
