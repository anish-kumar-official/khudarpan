import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import SVG files correctly
import educationIcon from "../public/Svg/education.svg";
import womenIcon from "../public/Svg/women.svg";
import healthcareIcon from "../public/Svg/healthcare2.svg";

const OurPrograms = () => {
  const programList = [
    {
      title: "EDUCATION",
      icon: educationIcon,
      link: "/work/education",
      desc: "Education, nutrition and holistic development of children",
    },
    {
      title: "WOMEN EMPOWERMENT",
      icon: womenIcon,
      link: "/work/women-empowerment",
      desc: "Empowering adolescent girls & women through community engagement",
    },
    {
      title: "HEALTHCARE",
      icon: healthcareIcon,
      link: "/work/healthcare",
      desc: "Taking healthcare services to doorsteps of hard to reach communities",
    },
  ];

  return (
    <div className="w-full py-12 px-4 flex justify-center items-center bg-gray-50">
      <div className="max-w-6xl w-full">
        <div className="flex justify-center items-center p-8 text-3xl md:text-4xl font-bold text-center mb-8">
          Our Programmes
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={item.link} className="block p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-24 h-24 relative">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="object-contain hover:translate-y-1 hover:scale-120"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-gray-600">{item.desc}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
