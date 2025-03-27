import React from "react";
import { Plus } from "lucide-react";

const ImpactSection = () => {
  const impactData = [
    {
      id: 1,
      impactNumber: "10K",
      impactName: "People",
      impactDesc: "and their famlies are benefitted and impacted every year",
    },
    {
      id: 2,
      impactNumber: 50,
      impactName: "Villages",
      impactDesc:
        "are being reached out making ignificant inroads and touching communities ",
    },
    {
      id: 3,
      impactNumber: 8,
      impactName: "Projects",
      impactDesc:
        "focused on education, healthcare, women empowerment and on providing basic needs",
    },
    {
      id: 4,
      impactNumber: 3,
      impactName: "States",
      impactDesc:
        "and reached including the remotest area with all our support and team",
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-gray-200 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-8 md:mb-12">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Our Impact
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
          {impactData.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-center justify-center text-center p-4 h-full"
            >
              <div className="flex items-center justify-center mb-2 text-[#007c7c]">
                <span className="font-bold text-5xl md:text-6xl lg:text-7xl">
                  {items.impactNumber}
                </span>
                <Plus className="ml-2" size={48} strokeWidth={3} />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {items.impactName}
              </h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">
                {items.impactDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
