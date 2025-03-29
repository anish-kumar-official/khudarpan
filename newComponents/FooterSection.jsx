import React from "react";
import footerData from "../data/footerData.json";
import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { Mail, Phone } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterSection = () => {
  const footerSocial = [
    {
      icon: <SlSocialYoutube />,
      link: "https://youtube.com/@khudarpanfoundation?feature=share",
    },
    {
      icon: <SlSocialInstagram />,
      link: "https://www.instagram.com/khudarpan?igsh=dWpqYTVseTkyb2Jm",
    },
    {
      icon: <SlSocialLinkedin />,
      link: "https://www.linkedin.com/company/khudarpan-foundation/",
    },
    {
      icon: <SlSocialFacebook />,
      link: "https://www.facebook.com/share/18R9MHLppC/",
    },
    {
      icon: <BsTwitterX />,
      link: "https://x.com/khudarpan?t=42ZE27cft_2Z_QxzkS3jbg&s=09",
    },
  ];

  return (
    <footer className="w-full bg-gray-700 text-white py-12 px-4">
      <div className="container mx-auto">
        {/* Footer Menu Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {footerData.footerMenu.map((items, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold pb-2 border-b-2 border-[#ffa910]">
                {items.title}
              </h3>
              <div className="space-y-2">
                {items.dropdownItems.map((dropdownItems, dropIndex) => (
                  <Link
                    key={dropIndex}
                    href={dropdownItems.href}
                    className="block text-gray-300 hover:text-[#ffa910] transition-colors duration-200"
                  >
                    {dropdownItems.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Contact and Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Address Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-3">Khudarpan Foundation</h4>
            <p className="text-gray-300 mb-2">
              Parham, Jamalpur, Munger, Bihar, India - 811214
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={20} className="text-[#ffa910]" />
                <span>+91-7250861237, 70615 42809</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <IoLogoWhatsapp size={20} className="text-green-500" />
                <span>+91-7070605395</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={20} className="text-[#ffa910]" />
                <div className="flex flex-col">
                  <span>info@khudarpan.org</span>
                  <span>support@khudarpan.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {footerSocial.map((items, index) => (
              <Link
                key={index}
                href={items.link}
                className="text-2xl text-gray-300 hover:text-[#ffa910] transition-colors duration-200"
              >
                {items.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Khudarpan Foundation. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
