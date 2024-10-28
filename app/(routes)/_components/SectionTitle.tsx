"use client";
import { Nerko_One } from "next/font/google";
import React, { useEffect, useRef } from "react";
import { FaRegSnowflake } from "react-icons/fa";
import anime from "animejs/lib/anime.es.js";

const nerkone = Nerko_One({
  subsets: ["latin"],
  weight: "400",
});

interface SectionTitleProps {
  title: string;
  titleTwo: string;
  description?: string;
}
const SectionTitle = ({ title, titleTwo, description }: SectionTitleProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: titleRef.current?.querySelectorAll(".title-animated"),
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: "easeOutQuad",
            delay: anime.stagger(200),
          });
          anime({
            targets: descriptionRef.current?.querySelectorAll(".description-animated"),
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: "easeOutQuad",
            delay: anime.stagger(200),
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
    <div className="container mt-16 mb-4 max-w-5xl">
      <div
        className="flex flex-col items-center justify-center text-center"
        ref={titleRef}
      >
        <h1 className="text-myprimary text-base md:text-lg mb-4 md:mb-2 font-semibold flex items-center justify-center gap-1 title-animated">
          <FaRegSnowflake /> {title}
        </h1>

        <h1
          className={`${nerkone.className} text-xl md:text-4xl lg:text-6xl mb-4 textone font-semibold title-animated`}
        >
          {titleTwo}
        </h1>
        <p className="textone font-light text-sm md:text-base description-animated" ref={descriptionRef}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
