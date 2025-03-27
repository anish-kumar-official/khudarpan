import React from "react";

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center w-full h-[400px] p-4">
      <div className="w-[900px] h-[200px]">
        <p className="text-lg text-center">
          Khudarpan is a passionate non-profitable organization dedicated to
          transforming lives across Bihar and Delhi through holistic social
          development. Driven by the profound philosophy of "We Live for
          Others", our mission encompasses four critical areas: education, women
          and child welfare, technology, and job creation, with a resolute
          commitment to fighting hunger. Through innovative campaigns like{" "}
          <span> </span>
          <span className="bg-yellow-200">
            JIGYASA (educational empowerment), AAHAR (nutritional support),
            KHUSHIYAN (basic needs provisions), AURAT (women's empowerment),
            VASTR (clothing support), and PARAMARSH (motivational guidance)
          </span>
          , we strive to create sustainable opportunities for underprivileged
          communities. Registered under the Ministry of Corporate Affairs and
          recognized by NITI Aayog, we are committed to nurturing potential,
          breaking barriers, and enabling marginalized individuals to achieve
          their dreams and contribute meaningfully to national growth.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
