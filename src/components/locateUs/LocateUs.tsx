import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocateUs = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/DIET+Kupwara/@34.5199199,74.2340859,19.79z";

  return (
    <div className="w-full px-4 py-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FaMapMarkerAlt className="text-red-600" /> Locate Us
      </h2>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-3xl overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/api/map"
          alt="DIET Kupwara Location"
          width={800}
          height={400}
          className="w-full h-auto object-cover"
        />
      </a>
    </div>
  );
};

export default LocateUs;