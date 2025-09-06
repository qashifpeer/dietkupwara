
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PrincipalMessage: React.FC = () => {
  const profilePicSrc = '/images/short-banners/principal-desk.png';
  const altText = "Principal's Profile Picture";

  const messageLines = [
    "Welcome to our school. We strive for excellence in education.",
    "Our principal believes in nurturing every student's potential.",
    "Join us in making a difference every day."
  ];



  return (
    <div className="w-1/2 mx-auto text-center">
      {/* Profile picture above */}
      <div className="mb-4">
        <Image
          src={profilePicSrc}
          alt={altText}
          width={500}
          height={300}
          className="mx-auto w-full"
        />
      </div>

      {/* Text lines */}
      <div className="mb-4 text-gray-700 space-y-2">
        
          <p className="text-base leading-relaxed">
            {messageLines}
          </p>
    
      </div>
     

      {/* Read more button */}
      <div>
        <Link href={"readMoreHref"}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PrincipalMessage;
