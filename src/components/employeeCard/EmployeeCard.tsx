"use client";
import Image from "next/image";
import Link from "next/link";
import type { EmployeeType } from "@/lib/interface";

interface Props {
  postData: EmployeeType;
}

const EmployeeCard = ({ postData }: Props) => {
  return (
    <Link href={`blog/${postData.slug}`}>
      <div className="flex flex-col h-full shadow-md rounded overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-white">
        {/* Fixed size image wrapper */}
        <div className="relative w-full h-[450px]">
          <Image
            src={postData?.imageUrl}
            alt={postData?.name || "Employee"}
            fill
            className="object-cover object-top"
          />
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
            <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-tl-full rounded-br-full uppercase">{postData?.postHeld}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col px-4 py-4 grow">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {postData?.name}
          </h2>
          <p className="text-xs text-gray-400 mt-1 mb-2">{postData?.contact}</p>
          <p className="text-sm text-gray-600 line-clamp-3">
            {postData?.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EmployeeCard;
