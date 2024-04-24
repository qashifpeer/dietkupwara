import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import footerImage from "@/../../public/images/logo-white.png"

const Footer = () => {
  return (
    <footer className="w-full bg-sky-950 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          <div className="flex flex-col w-1/2 px-2 py-2">
            <Image src="/Images/logo.png" width={60} height={60} alt="logo" />
            <p className="text-base leading-5">
            Dedicated to excellence, District Institute of Education and Training Kupwara offers premier government training programs, fostering educational growth and empowering educators for a brighter teaching learning experience. 
            </p>
          </div>
          <div className="flex w-1/3 justify-center items-center gap-4">
            <FaFacebook className="h-8 w-8 cursor-pointer hover:scale-105 transition-transform duration-200" />
            <FaXTwitter className="h-8 w-8 cursor-pointer hover:scale-105 transition-transform duration-200" />
            <FaYoutube className="h-8 w-8 cursor-pointer hover:scale-105 transition-transform duration-200" />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 text-slate-100 max-lg:py-">
        <div className="max-w-6xl mx-auto py-2 flex justify-between px-2 md:px-4">
          <p className="text-xs md:text-base">©Diet-Kupwara 2024</p>
          
          <div className="flex gap-4">
            <div className="flex gap-2 justify-center items-center">
              <FaPhoneAlt />
              <span className="text-xs md:text-base">+91 7006318724</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <FaEnvelope />
              <span className="text-xs md:text-base">prdietkup@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
