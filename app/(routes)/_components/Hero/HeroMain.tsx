"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { sliderData } from "@/constans";
import { FaRegSnowflake } from "react-icons/fa";
import { Lilita_One } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroForm from "./HeroForm";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const HeroMain = () => {
  return (
    <div className="relative px-4 md:px-16 rounded-4xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {sliderData.map((item, index) => (
            <CarouselItem
              key={index}
              className="relative h-[600px] md:h-[800px] bg-center rounded-4xl"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "cover",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-35 dark:bg-opacity-50 rounded-4xl">
                <div className="p-6 max-w-5xl">
                  <h1 className="text-myprimary text-lg font-semibold gap-2 flex items-center justify-center">
                    <FaRegSnowflake />
                    Hoş Geldiniz
                  </h1>
                  <h1
                    className={`text-white text-xl md:text-4xl lg:text-6xl mb-8 font-semibold ${lilita.className}`}
                  >
                    {item.title}
                  </h1>
                  <p className="text-white text-base md:text-lg items-center justify-center">
                    {item.description}
                  </p>

                  <div className="flex flex-row gap-2 md:gap-8 items-center justify-center">
                    <div className="flex gap-1">
                      <Link href={item.href}>
                        <Button variant="myButton" size="lgRounded">
                          Detaya Git
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <HeroForm />
    </div>
  );
};

export default HeroMain;
