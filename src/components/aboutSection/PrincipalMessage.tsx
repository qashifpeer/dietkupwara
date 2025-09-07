"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PrincipalMessage: React.FC = () => {
  const profilePicSrc = "/images/principal-profile.png";
  const altText = "Principal's Profile Picture";



  const messageLines = [
    "The future of education rests on the shoulders of our teachers, and the responsibility of preparing them rests with institutions like ours.",
    "At DIET, we accept this responsibility with humility and determination.",
    " Every training session we conduct, every innovation we adopt, and every partnership we build is aimed at empowering teachers to make a difference in the lives of their students and the society at large."
    
  ];
 
  return (
    <div className="relative md:w-1/2 mx-auto text-center rounded-lg shadow p-6 pt-24">
     
         {/* Profile image overlapping top */}
       <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[190px] h-[190px]">
        <Image
          src={profilePicSrc}
          alt={altText}
          fill
          className="rounded-full shadow-lg object-cover border-4 border-emerald-600"
        />
      </div>
      
      {/* Header */}
      <div className="text-left">
        <h3 className="montserrat-bold text-4xl text-emerald-600">From</h3>
        <h3 className="montserrat-bold text-3xl text-rose-500">
          Principal’s Desk
        </h3>
      </div>

       {/* Text lines */}
      <div className="text-gray-700 text-left mt-6 space-y-3">
        <h3 className="montserrat-bold text-lg">Dear Colleagues, Learners, and Esteemed Visitors,</h3>
        {messageLines.map((line, i) => (
          <p key={i} className="text-lg montserrat-normal leading-relaxed">
            {line}
          </p>
        ))}
      </div>

       {/* Read more button */}
      <div className="mt-6 mb-16">
        <Link href={"/principal"} target="blank">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded shadow hover:bg-emerald-700 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PrincipalMessage;
