"use client";

import { Carousel } from "react-responsive-carousel";
import { heroData } from "@/app/data/staticData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ResponsiveCarousel() {
  return (
    <div className="hero relative overflow-hidden mt-[72px]">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
      >
        {heroData.map((item) => (
          <div
            key={item.id}
            className="container mx-auto px-4 py-20 flex flex-col justify-center items-center h-full min-h-[700px] md:min-h-[700px]"
          >
            <div>
              <img
                src={item.imageUrl}
                alt="slides"
                className="w-full h-full object-cover absolute inset-1 z-0 opacity-85"
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full z-10">
              <h1 className="text-4xl font-bold text-white text-center">
                {item.title}
              </h1>
              <p className="text-xl text-white text-opacity-75 px-32 py-5">{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
