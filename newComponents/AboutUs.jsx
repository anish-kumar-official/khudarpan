"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SidebarNav from './SidebarNav';
import SectionContent from './SectionContent';
import { navItems, aboutUsContent } from './AboutUsData';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("vision");
  const sectionRefs = {
    vision: useRef(null),
    ourVision: useRef(null),
    mission: useRef(null),
    philosophy: useRef(null),
    lifecycle: useRef(null),
    approach: useRef(null),
    initiatives: useRef(null),
    trust: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for better highlighting
      
      // Find the section that's currently in view
      let currentSection = "vision";

      // object.entries converts the sectionRefs object into an array of [key, value] pairs
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          
          if (scrollPosition >= offsetTop) {
            currentSection = id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initialize active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId); // Immediately set active state when clicked
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 50, // Offset to account for any fixed headers
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <Image
            src='/NGOimages/aboutusbg.jpg'
            alt="About Us"
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation Component */}
        <SidebarNav 
          navItems={navItems} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />

        {/* Main content */}
        <div className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 gap-12">
            {/* Vision Section */}
            <SectionContent id="vision" sectionRef={sectionRefs.vision} title={aboutUsContent.vision.title}>
              {aboutUsContent.vision.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Our Vision Section */}
            <SectionContent id="ourVision" sectionRef={sectionRefs.ourVision} title={aboutUsContent.ourVision.title}>
              {aboutUsContent.ourVision.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                {aboutUsContent.ourVision.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {aboutUsContent.ourVision.additionalContent.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Mission Section */}
            <SectionContent id="mission" sectionRef={sectionRefs.mission} title={aboutUsContent.mission.title}>
              {aboutUsContent.mission.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Philosophy Section */}
            <SectionContent id="philosophy" sectionRef={sectionRefs.philosophy} title={aboutUsContent.philosophy.title}>
              {aboutUsContent.philosophy.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Lifecycle Section */}
            <SectionContent id="lifecycle" sectionRef={sectionRefs.lifecycle} title={aboutUsContent.lifecycle.title}>
              {aboutUsContent.lifecycle.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Approach Section */}
            <SectionContent id="approach" sectionRef={sectionRefs.approach} title={aboutUsContent.approach.title}>
              {aboutUsContent.approach.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Initiatives Section */}
            <SectionContent id="initiatives" sectionRef={sectionRefs.initiatives} title={aboutUsContent.initiatives.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutUsContent.initiatives.programs.map((program, index) => (
                  <div 
                    key={index} 
                    className={`bg-gray-50 p-6 rounded-lg border-l-4 border-${program.color === '#007c7c' ? '[#007c7c]' : program.color} hover:shadow-md transition-shadow`}
                  >
                    <h3 className="text-xl font-medium mb-3 text-[#007c7c] font-roboto">{program.title}</h3>
                    <p className="text-gray-700">{program.description}</p>
                  </div>
                ))}
              </div>
            </SectionContent>

            {/* Trust Section */}
            <SectionContent id="trust" sectionRef={sectionRefs.trust} title={aboutUsContent.trust.title}>
              {aboutUsContent.trust.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6">{paragraph}</p>
              ))}
            </SectionContent>

            {/* Government Initiatives Section */}
            {/* <div className="bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-lg border border-orange-100">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c] font-roboto">
                {aboutUsContent.governmentInitiatives.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aboutUsContent.governmentInitiatives.categories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-medium mb-3 text-[#007c7c] font-roboto">{category.title}</h3>
                    <ul className="list-none space-y-2 text-gray-700">
                      {category.initiatives.map((initiative, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
            
            <div className="text-center mt-10 md:hidden">
              <Link
                href="/contact"
                className="text-white bg-[#007c7c] hover:bg-orange-500 px-6 py-3 rounded-md inline-flex items-center transition-colors"
              >
                <span className="font-bold text-lg">Get in touch with us</span>
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs; 