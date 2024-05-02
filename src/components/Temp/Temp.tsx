import Image from "next/image";
import React from "react";

const Temp = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-25 rounded  min-h-screen">
      <div className="flex flex-col justify-center items-center w-full h-screen ">
        <h2 className="text-6xl font-extrabold text-slate-100 text-center mb-4">We are Under Maintenance</h2>
        <Image src="/Images/server.png" width={300} height={300} alt="server" />
      </div>
    </div>
  );
};

export default Temp;
