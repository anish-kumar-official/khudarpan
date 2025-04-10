import React from "react";

const SectionContent = ({ id, sectionRef, title, children }) => {
  return (
    <div id={id} ref={sectionRef} className="scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-4 text-[#007c7c] font-roboto">{title}</h2>
      {children}
    </div>
  );
};

export default SectionContent; 