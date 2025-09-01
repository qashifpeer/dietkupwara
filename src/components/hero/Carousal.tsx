"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade"; // Add this import

// Import your carousalPics if used, or supply image srcs more dynamically.
const images = [
  {src :'/Images/c1.png'},
  {src :'/Images/c2.jpg'},
  {src :'/Images/c3.jpg'},
  {src :'/Images/c4.jpg'},
  {src :'/Images/c5.jpg'},

]

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Carousal() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const fade = React.useRef(Fade()); // Add this line
  return (
    <div className="relative w-screen h-screen">
      <Carousel
        plugins={[plugin.current, fade.current]}
        className="w-screen h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((img, i) => (
           <CarouselItem key={i} className="w-screen h-screen">
                <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={`Carousel image ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-40 rounded-full p-3 text-white"/>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-40 rounded-full p-3 text-white" />
      </Carousel>
    </div>
  );
}

export default Carousal;
