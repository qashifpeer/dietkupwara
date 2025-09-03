"use client";
import Image from "next/image";
import Link from "next/link";
import type { EmployeeType } from "@/lib/interface";
import { MdOutlineEmail,MdOutlinePhoneInTalk } from "react-icons/md";




interface Props {
  postData: EmployeeType;
}

const EmployeeCard = ({ postData }: Props) => {
  return (
    <Link href={`administration/${postData.slug}`}>
    <div className="flex shadow-md rounded overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-white max-w-xl">
        {/* Left: Passport-size image */}
        <div className="relative w-[120px] h-[160px] flex-shrink-0">
          <Image
            src={postData?.imageUrl}
            alt={postData?.name || "Employee"}
            fill
            className="object-cover rounded-l"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center p-4 grow">
          <h2 className="text-lg font-semibold text-gray-800">{postData?.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{postData?.postHeld}</p>
          <p className="text-sm text-gray-600 mt-1"><MdOutlineEmail className="inline text-green-500 mr-2" />{postData?.email}</p>
          <p className="text-sm text-gray-600 mt-1"><span><MdOutlinePhoneInTalk className="inline text-green-500 mr-2" /></span>{postData?.contact}</p>
          {/* <p className="text-sm text-gray-600 mt-1">{postData?.level}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default EmployeeCard;
