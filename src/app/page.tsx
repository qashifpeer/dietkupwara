"use client";
import { Carousal,  Message,  UpcomingEvents } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { DiVim } from "react-icons/di";



export default function Home() {
  return (
    <section className="mx-auto">
      
      
      {/* carousal */}
     <Carousal />
     <Message />
     {/* <UpcomingEvents /> */}

     

      
    </section>
  );
}
