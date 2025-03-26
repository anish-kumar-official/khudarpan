import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="fixed 
        top-0 
        left-0 
        w-full 
        h-[120px] 
        bg-white 
        shadow-md 
        z-50 
        flex 
        items-center 
        justify-between 
        px-4 
        sm:px-6 
        lg:px-8"
    >
      <div className="upperHeader"></div>
      <div className="lowerHeader">
        <div className="logo">
          <Image
            src="./Logo/mainLogo.jpeg"
            width={500}
            height={500}
            alt="Khudarpan Logo Loading..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
