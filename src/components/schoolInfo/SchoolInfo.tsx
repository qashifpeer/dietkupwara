import React from "react";
import { FaUniversity, FaSchool, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";

const SchoolInfo = () => {
  const schoolData = [
    {
      title: "Higher Secondaries",
      number: 54,
      icon: <FaUniversity className="text-4xl text-blue-600 relative z-10" />,
    },
    {
      title: "High Schools",
      number: 102,
      icon: <FaSchool className="text-4xl text-green-600 relative z-10" />,
    },
    {
      title: "Middle Schools",
      number: 700,
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500 relative z-10" />,
    },
    {
      title: "Primary Schools",
      number: 989,
      icon: <FaBookOpen className="text-4xl text-purple-600 relative z-10" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {schoolData.map((school, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 group hover:shadow-lg"
          >
            {/* Sliding Green Overlay */}
            <div className="absolute bottom-0 left-0 h-0 w-full bg-emerald-500 transition-all duration-500 ease-in-out group-hover:h-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center montserrat-semibold text-gray-800 group-hover:text-sky-100 transition-colors duration-300">
              {school.icon }
              <h2 className="mt-4 text-xl font-semibold">{school.title}</h2>
              <p className="mt-2 text-2xl font-bold">{school.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolInfo;