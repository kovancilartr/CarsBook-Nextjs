"use client";
import React from "react";
import { testimonialsData } from "@/constans";
import SectionTitle from "../SectionTitle";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testiomonials = () => {
  return (
    <div>
      <SectionTitle title="Our Testimonials" titleTwo="Lorem ipsum dolor sit" />
      <div className="px-4 md:px-6 lg:px-12 xl:px-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4 mb-2">
            {testimonialsData.slice(0, 10).map((testimonial, index) => (
              <CarouselItem
                className="basis-1/1 md:basis-1/3 flex flex-row items-center"
                key={index}
              >
                <Image
                  alt={testimonial.author}
                  src={testimonial.image}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <div className="flex flex-col items-start pl-4">
                  <div className="flex">
                    {Array.from({ length: testimonial.stars }).map(
                      (_, index) => (
                        <FaStar key={index} className="text-yellow-500" />
                      )
                    )}
                  </div>
                  <p className="font-light text-sm mt-4">
                    {testimonial.comment}
                  </p>
                  <p className="textone font-bold mt-4">{testimonial.author}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testiomonials;
