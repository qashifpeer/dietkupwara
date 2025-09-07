"use client";
import { AboutSection, Carousal,  } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { DiVim } from "react-icons/di";



export default function Home() {
  return (
    <section className="mx-auto">
      
     <Carousal />
     <AboutSection />
     {/* <UpcomingEvents /> */}

     

      
    </section>
  );
}
