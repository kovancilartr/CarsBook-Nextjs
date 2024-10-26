"use client";
import React from "react";
import { carsData } from "@/constans";
import SectionTitle from "../SectionTitle";
import CardItem from "../CardItem";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeOurFleets = () => {
  return (
    <div>
      <SectionTitle title="Our Fleets" titleTwo="Lorem ipsum dolor sit" />
      <div className="px-4 md:px-6 lg:px-12 xl:px-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {carsData.slice(0, 10).map((car, index) => (
              <CarouselItem
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                key={index}
              >
                <CardItem key={index} car={car} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative flex justify-between mt-8 mb-8">
            <CarouselPrevious className="carouselPrev" />
            <CarouselNext className="carouselNext" />
          </div>
          <div className="border-b-2 dark:border-gray-700 my-4 w-1/12 mx-auto" />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeOurFleets;
