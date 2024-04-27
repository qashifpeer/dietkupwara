"use client";
import { Carousal } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { DiVim } from "react-icons/di";



export default function Home() {
  return (
    <section className="mx-auto">
      {/* carousal */}
     <Carousal />

      <h2 className="my-6 text-lg text-slate-100 font-bold bg-slate-900 px-4 py-2 text-center">
        Class 8th Results 2024
      </h2>
      <div className="flex justify-center bg-green-200 z-50">
        <Link
          href="https://dietkup.educian.com/campus_management_front_end_client/onlineresults"
          target="blank"
        >
          <button
            type="button"
            className="bg-sky-500 cursor-pointer hover:bg-red-400 w-80 h-20 border border-transparent rounded-md box-border p-4 m-4"
          >
            View Result
          </button>
        </Link>
      </div>

      {/* <div className="bg-green-200 flex">
        <h2 className="my-6 text-lg text-slate-100 font-bold bg-slate-900 px-4 py-2">
          
        </h2>
        <Link href="">
          {" "}
          <button className="bg-sky-500 px-4 cursor-pointer py-2 rounded-full font-bold hover:bg-sky-300 duration-300 w-[300px]">
            View Result
          </button>
        </Link>
      </div> */}
    </section>
  );
}
