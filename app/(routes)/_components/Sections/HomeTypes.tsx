"use client";
import { homeTypesData } from "@/constans";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ButtonArrow from "../ButtonArrow";
import anime from "animejs/lib/anime.es.js";

const HomeTypes = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: containerRef.current?.querySelectorAll(".image-animated"),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: "easeOutQuad",
            delay: anime.stagger(200, { start: 500 }),
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <section
      className="flex justify-center items-center bgone p-4"
      ref={containerRef}
    >
      <div className="grid grid-cols-2 md:grid-col-2 lg:grid-cols-4 gap-6">
        {homeTypesData.map((car, index) => (
          <div
            key={index}
            className="relative w-full rounded-xl shadow-lg group overflow-hidden image-animated"
          >
            <Image
              src={car.image}
              alt={car.type}
              width={565}
              height={678}
              className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-55 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="absolute top-4 left-4 text-white text-lg font-bold tracking-wider">
              {car.type}
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <ButtonArrow href="/" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTypes;
