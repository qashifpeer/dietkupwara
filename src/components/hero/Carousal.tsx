"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { carousalPics } from "@/constants/index";

import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <div className="min-h-[70vh]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl h-[50vh] mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent >
          <CarouselItem>
            <div className="">
              <CardContent className="flex h-[70vh] items-center justify-center p-4 ">
                {/* <span className="text-4xl font-semibold">2</span> */}
                <Image
                  src="/Images/c1.jpg"
                  alt="image"
                  width={1024}
                  height={700}
                  className="w-full h-full"
                />
              </CardContent>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div>
                <CardContent className="flex h-[70vh] items-center justify-center p-4">
                  {/* <span className="text-4xl font-semibold">1</span> */}
                  <Image
                    src="/Images/c2.jpg"
                    alt="image"
                    width={700}
                    height={400}
                    className="w-full h-full"
                  />
                </CardContent>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div>
                <CardContent className="flex h-[70vh] items-center justify-center p-4">
                  {/* <span className="text-4xl font-semibold">1</span> */}
                  <Image
                    src="/Images/c3.jpg"
                    alt="image"
                    width={700}
                    height={400}
                    className="w-full h-full"
                  />
                </CardContent>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <div>
                <CardContent className="flex h-[70vh] items-center justify-center p-4">
                  {/* <span className="text-4xl font-semibold">1</span> */}
                  <Image
                    src="/Images/c4.jpg"
                    alt="image"
                    width={700}
                    height={400}
                    className="w-full h-full"
                  />
                </CardContent>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <div>
                <CardContent className="flex h-[50vh] items-center justify-center p-4">
                  {/* <span className="text-4xl font-semibold">1</span> */}
                  <Image
                    src="/Images/c5.jpg"
                    alt="image"
                    width={700}
                    height={400}
                    className="w-full h-full"
                  />
                </CardContent>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Carousal;
