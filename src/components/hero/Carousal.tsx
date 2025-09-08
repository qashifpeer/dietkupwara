"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { motion } from "framer-motion";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Images array (import from external file for scalability)
const images = [
  { src: "/images/carousal/c1.jpg" },
  { src: "/images/carousal/c2.jpg" },
  { src: "/images/carousal/c3.jpg" },
  { src: "/images/carousal/c4.jpg" },
  { src: "/images/carousal/c5.jpg" },
];

function Carousal() {
  const autoplayRef = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const fadeRef = React.useRef(Fade());

  // Custom classes for responsiveness
  // Mobile: h-1/2 (50vh), Desktop: h-screen
  const containerClass =
    "relative w-full h-1/2 md:h-screen overflow-hidden";

  return (
    <div className={containerClass}>
      <Carousel
        plugins={[autoplayRef.current, fadeRef.current]}
        className="w-screen h-full"
        onMouseEnter={autoplayRef.current.stop}
        onMouseLeave={autoplayRef.current.reset}
      >
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i} className="w-full h-full">
              <div className="relative w-full h-full min-h-[300px]  md:min-h-screen">
                <Image
                  src={img.src}
                  alt={`Carousel image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center text-center bg-black/30">
                <div className="w-[50%] ml-16">

                  {/* Temp message  */}
                   <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl md:text-6xl text-start montserrat-bold text-emerald-700 drop-shadow-lg mb-2"
                  >
                    == Site Under Construction ==
                  </motion.h1>
                  {/* Temp message ends here */}

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl md:text-6xl text-start montserrat-bold text-sky-100 drop-shadow-lg mb-2"
                  >
                    Welcome to <span className="block">DIET Kupwara</span> 
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                    className="text-base text-start md:text-2xl text-sky-200 drop-shadow-md montserrat"
                  >
                    We take pride in shaping young and bright minds
                  </motion.p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-3 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-3 text-white" />
      </Carousel>
    </div>
  );
}

export default Carousal;
