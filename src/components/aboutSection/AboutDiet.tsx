"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMoreHoriz } from "react-icons/md";

const AboutDiet: React.FC = () => {
  const profilePicSrc = "/images/logo/logo.png";
  const altText = "Principal's Profile Picture";

  const messageLines =
["The District Institute of Education and Training (DIET), Kupwara, established in 1985, is the district’s premier centre for teacher education, professional development, and educational resource support.",
  "Established to strengthen school education at the grassroots level, DIET Kupwara serves as a hub for pre-service and in-service training, curriculum support, action research, and community-oriented educational initiatives.",
  "Our work is guided by a conviction that well-prepared, reflective and motivated teachers are the single most important determinant of school improvement and student learning outcomes."]

  return (
    <div className="relative md:w-1/2 mx-auto text-center rounded-lg shadow p-6 pt-24">
      {/* Profile image overlapping top */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[190px] h-[190px]">
        <Image
          src={profilePicSrc}
          alt={altText}
          fill
          className="rounded-full shadow-lg object-cover border-4 border-emerald-600 bg-black"
        />
      </div>

      {/* Header */}
      <div className="text-left">
        <h3 className="montserrat-bold text-4xl text-emerald-600">About</h3>
        <h3 className="montserrat-bold text-3xl text-rose-500">DIET Kupwara</h3>
      </div>

       {/* Text lines */}
      <div className="text-gray-700 text-left mt-6 space-y-3">
            {messageLines.map((line, i) => (
          <p key={i} className="text-lg montserrat-normal leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Read more button */}
      <div className="mt-6">
        <Link href={"/about"} target="blank">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded shadow hover:bg-emerald-700 transition">
            Read More <MdOutlineMoreHoriz className="inline text-rose-500" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutDiet;
