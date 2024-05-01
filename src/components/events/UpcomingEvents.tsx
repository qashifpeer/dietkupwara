import Image from "next/image";
import React from "react";

const UpcommingEvents = () => {
  return (
    <div className="max-w-6xl mx-auto  overflow-hidden">
      <h3 className="font-extrabold text-4xl text-left my-6">
        Upcoming Events{" "}
      </h3>
      <div className="lg:flex justify-center items-center w-full ">
        {/* left side */}
        <div className="w-full h-full lg:w-1/2 flex items-center justify-start   relative">
          <div className="bg-red-100 border-2 h-full w-[60%] ">
            <Image
              src="/Images/event1.jpg"
              height={400}
              width={400}
              alt="illustration"
              className="w-[400px] h-[400px]"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg  w-[40%] absolute end-6 p-4">
            <h3 className="font-bold text-base">Orientation Programme</h3>
            <p className="text-sm">
              Orientation programme for science teachers on 21st century skills.
              Orientation programme for science teachers on 21st century skills
            </p>
            <p className="font-semibold mt-2">April 12,2024 | 11:am</p>
            <hr />
            <p className="font-normal">Lecture Hall, DIET Kupwara</p>
          </div>
        </div>
        {/* right side */}
        <div className="w-full h-full lg:w-1/2 flex items-center justify-start ms-2  relative">
          <div className=" border-2 h-full w-[60%] ">
            <Image
              src="/Images/event2.jpg"
              height={400}
              width={400}
              alt="illustration"
              className="w-[400px] h-[400px]"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg  w-[40%] absolute end-6 p-4">
            <h3 className="font-bold text-base">Orientation Programme</h3>
            <p className="text-sm">
              Orientation programme for science teachers on 21st century skills.
              Orientation programme for science teachers on 21st century skills
            </p>
            <p className="font-semibold mt-2">April 12,2024 | 11:am</p>
            <hr />
            <p className="font-normal">Lecture Hall, DIET Kupwara</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
