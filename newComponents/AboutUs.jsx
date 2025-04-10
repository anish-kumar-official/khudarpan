"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

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

  const navItems = [
    { id: "vision", label: "Vision to Movement" },
    { id: "ourVision", label: "Our Vision" },
    { id: "mission", label: "Mission" },
    { id: "philosophy", label: "Philosophy" },
    { id: "lifecycle", label: "Lifecycle Approach" },
    { id: "approach", label: "Our Approach" },
    { id: "initiatives", label: "Initiatives" },
    { id: "trust", label: "Why Trust Us" },
  ];

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
        {/* Left sidebar navigation */}
        <div className="md:w-64 w-full md:sticky md:h-screen md:top-0 bg-white shadow-md z-10 flex flex-col justify-center items-center">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-300 ${
                      activeSection === section.id
                        ? "bg-orange-100 text-orange-500 font-semibold border-l-4 border-orange-500"
                        : "text-gray-600 hover:bg-gray-100 hover:text-[#007c7c] border-l-4 border-transparent"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 hidden md:block">
            <Link
              href="/contact"
              className="text-white bg-[#007c7c] hover:bg-orange-500 px-4 py-2 rounded-md inline-flex items-center justify-center w-full transition-colors"
            >
              <span className="font-bold">Contact Us</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 gap-12">
            <div id="vision" ref={sectionRefs.vision} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">FROM VISION TO MOVEMENT</h2>
              <p className="text-gray-700 mb-6">
                Khudarpan started with a belief-simple yet powerful-true empowerment begins with
                self-reliance. What began as a dream has evolved into a movement, empowering people with
                the skills, confidence, and community support to define their own success stories.
              </p>
              <p className="text-gray-700 mb-6">
                We empower through mentorship, skill development, and community-led impact, crossing boundaries and
                unleashing potential. At Khudarpan, we don't just empower people-we build leaders, innovators,
                and game-changers. Serve with us to redefine self-reliance!
              </p>
            </div>

            <div id="ourVision" ref={sectionRefs.ourVision} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">OUR VISION</h2>
              <p className="text-gray-700 mb-6">
                Empowering Independence. Changing Lives. We envision a world where independence isn't a
                privilege—it's a lifestyle.
              </p>
              <p className="text-gray-700 mb-6">
                At Khudarpan, we:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Break barriers that hold individuals back</li>
                <li>Empower people with skills & opportunities</li>
                <li>Create a strong community of changemakers</li>
              </ul>
              <p className="text-gray-700 mb-6">
                This is not a vision—it's our promise to a future where every individual has the ability to make
                their own success happen. When individuals succeed, the world changes.
              </p>
            </div>

            <div id="mission" ref={sectionRefs.mission} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">MISSION</h2>
              <p className="text-gray-700 mb-6">
                Khudarpan Foundation is committed to empowering marginalized
                communities via initiatives in youth development, nutrition, and education. We create
                educational platforms, build institutes for disadvantaged children, and fight hunger and
                malnutrition. Our aim also extends to guiding the youth towards national growth and
                development, encouraging civic duty and patriotism. We extend services and support to
                marginalised communities across the country through dedicated teams, fostering social impact.
              </p>
            </div>

            <div id="philosophy" ref={sectionRefs.philosophy} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">PHILOSOPHY OF CHANGE</h2>
              <p className="text-gray-700 mb-6">
                Khudarpan Foundation believes in more than just aid—We believe in lasting change. Our belief
                in Civic Driven Change is based on the premise that lasting change occurs when each of us
                owns responsibility for creating an equitable society. By filling the gap between the privileged
                and the underprivileged, we empower through education, health, and basic resources so that
                development is not temporary relief but a lasting difference.
              </p>
              <p className="text-gray-700 mb-6">
                India's changing landscape has opened up new avenues, but inequalities remain. At Khudarpan
                Foundation, we direct collective energies to build a future where every child, every family, and
                every individual can flourish.
              </p>
              <p className="text-gray-700 mb-6">
                Be part of making a difference. "We live for others."
              </p>
            </div>

            <div id="lifecycle" ref={sectionRefs.lifecycle} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">THE LIFECYCLE APPROACH</h2>
              <p className="text-gray-700 mb-6">
                Empowerment is the foundation of our work, with education, health, and access to opportunities
                as core priorities.
              </p>
              <p className="text-gray-700 mb-6">
                At Khudarpan Foundation, we work on the belief that true empowerment arises from
                empowering others. We are determined to ensure that all our initiatives result in creating
                sustainable and meaningful positive impact in the communities we are engaged with.
              </p>
              <p className="text-gray-700 mb-6">
                Education is a key factor in narrowing disparities and promoting gender equality. In addition, it enables
                people to gain the knowledge and skills required to live healthier and more sustainable lives and
                to contribute to building a more peaceful and equitable world.
              </p>
            </div>

            <div id="approach" ref={sectionRefs.approach} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">OUR APPROACH</h2>
              <p className="text-gray-700 mb-6">
                Our approach is to have close interaction with local communities and healthcare professionals
                to improve access to vital healthcare services and encourage overall health education.
              </p>
              <p className="text-gray-700 mb-6">
                At Khudarpan Foundation, we take a holistic lifecycle approach: each of our campaigns is aimed
                at creating lasting change in the communities we work with. From education to healthcare,
                through efforts in addressing very fundamental needs, we promote the significance of solving
                key problems through well-focused campaigns that leave an actual impact. Whether we're
                dealing with human rights, education, or health, our campaigns are poised to leave lasting
                impact by engaging people, sensitizing them, and pushing for meaningful change.
              </p>
            </div>

            <div id="initiatives" ref={sectionRefs.initiatives} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">OUR INITIATIVES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">JIGYASA</h3>
                  <p className="text-gray-700">Educational empowerment program focused on providing quality education to underprivileged children and enhancing their learning outcomes.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#007c7c] hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">AAHAR</h3>
                  <p className="text-gray-700">Nutritional support initiative designed to fight hunger and malnutrition among vulnerable communities, especially children.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">KHUSHIYAN</h3>
                  <p className="text-gray-700">Program focused on providing basic needs to underprivileged communities to improve their quality of life and wellbeing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#007c7c] hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">AURAT</h3>
                  <p className="text-gray-700">Women's empowerment program that focuses on education, skill development, and creating livelihood opportunities for women.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">VASTR</h3>
                  <p className="text-gray-700">Clothing support initiative aimed at providing dignity and protection to vulnerable individuals through adequate clothing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#007c7c] hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">PARAMARSH</h3>
                  <p className="text-gray-700">Motivational guidance program designed to provide mentorship, counseling, and support to help individuals realize their potential.</p>
                </div>
              </div>
            </div>

            <div id="trust" ref={sectionRefs.trust} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">WHY TRUST US?</h2>
              <p className="text-gray-700 mb-6">
                At Khudarpan, integrity and transparency are the core of all that we do. With a deep passion for
                social impact, we ensure that every donation and effort reaches the deserving. Our team is
                made up of committed professionals and volunteers who work day and night to empower
                underprivileged communities. We have complete accountability through frequent reports and
                updates, so you can witness the difference your support makes. Trust Khudarpan to convert
                compassion into meaningful action.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-orange-50 p-6 rounded-lg border border-orange-100">
              <h2 className="text-2xl font-semibold mb-4 text-[#007c7c]">Government Initiatives Alignment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">EDUCATION</h3>
                  <ul className="list-none space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Sarva Shiksha Abhiyan</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>National Education Policy</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Beti Bachao, Beti Padhao</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Digital India</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">WOMEN EMPOWERMENT</h3>
                  <ul className="list-none space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Anaemia Mukt Bharat</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Poshan Abhiyan</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Atmanirbhar Bharat Abhiyan</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Anganwadi Strengthening</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-[#007c7c]">LIVELIHOOD</h3>
                  <ul className="list-none space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Skill India</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Enhancing Formal Skilling</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Rural Development Programs</li>
                    <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>Self-Help Group Initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
            
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