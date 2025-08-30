"use client";

import React, { useState, useEffect } from "react";

const navItems = ["home", "about", "faculty", "events", "contact"] as const;
type NavItem = (typeof navItems)[number];

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-20 transition-colors duration-300 
        ${scrolled ? "bg-black bg-opacity-80 backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <div className="text-white font-bold text-xl cursor-pointer select-none">
          Logo
        </div>
        <ul className="flex space-x-8 text-white capitalize tracking-wide text-md">
          {navItems.map((item: NavItem) => (
            <li key={item} className="hover:text-gray-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
