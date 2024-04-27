"use client";

import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <header>
      <section className=" max-md:hidden w-full">
        
        <div className=" bg-green-200">
          {/* Left Side */}
         
         <Image
                src="/Images/banner-header.png"
                alt="forests"
                width={700}
                height={300}
                className="w-full h-[130px]"
              />
        </div>
      </section>
      <nav className="px-4 relative bg-slate-900 text-slate-100 flex justify-between items-center h-16  mx-auto z-30 shadow-xl transition-all duration-500">
        <Link href="/">
          <div className="flex items-center justify-center">
            <Image
              src="/Images/logo.png"
              alt="forests"
              width={50}
              height={50}
              className="md:w-12  md:h-12"
            />

            <h2 className="text-base md:text-lg font-bold leading-tight md:pb-1  ">
              DIET<span className="text-sky-500 ">Kupwara</span>
            </h2>
          </div>
        </Link>
        <div className="lg:hidden">
          <div onClick={handleClick}>{toggle ? <ImCross /> : <FaBars />}</div>
        </div>

        <div
          className={`${
            toggle ? "left-0 " : "-left-full"
          } max-lg:bg-slate-900 flex flex-col absolute justify-start items-center py-16  w-full h-screen top-12 lg:static lg:flex-row lg:py-0 lg:justify-end lg:space-x-8 lg:px-8 z-0 lg:h-8`}
        >
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleClick}
              className=" flex my-4 font-bold text-lg relative group transition-all duration-500  hover:translate-x-1"
            >
              {link.title}
              <span className="absolute inline-block h-[3px] w-0 bg-primary -bottom-2 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
