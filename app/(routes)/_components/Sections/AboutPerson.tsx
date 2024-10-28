"use client";
import React, { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import ButtonArrow from "../ButtonArrow";
import { Button } from "@/components/ui/button";
import { personData } from "@/constans";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import anime from "animejs/lib/anime.es.js";

const AboutPerson = () => {
  const personRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: personRef.current?.querySelectorAll(".person-animated"),
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

    if (personRef.current) {
      observer.observe(personRef.current);
    }

    return () => {
      if (personRef.current) {
        observer.unobserve(personRef.current);
      }
    };
  }, []);
  return (
    <div className="relative px-4 md:px-16 rounded-4xl my-12">
      <div className="absolute inset-0 bg-center bg-no-repeat bg-service-bg opacity-10 pointer-events-none"></div>
      <div className="serviceBg rounded-4xl pt-2 pb-20" ref={personRef}>
        <SectionTitle title="Our Person" titleTwo="We offer the best persons" />
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personData.map((person, index) => (
            <div
              key={index}
              className="rounded-3xl group overflow-hidden relative person-animated"
            >
              <Image
                alt=""
                src={person.image}
                width={525}
                height={640}
                className="w-full h-full object-cover transform transition-transform duration-300 
                brightness-75 group-hover:brightness-100 group-hover:scale-110 rounded-3xl"
              />

              <div
                className="absolute bottom-0 left-0 right-0 bg-slate-900 p-2 flex justify-center space-x-4 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 *:transform group-hover:translate-y-0 translate-4"
              >
                <FaFacebookF className="text-white text-2xl" />
                <FaTwitter className="text-white text-2xl" />
                <FaLinkedinIn className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center text-center mt-6 gap-2">
          <Button variant="myButton" size="lgRounded">
            View All Services
          </Button>
          <ButtonArrow href="/w" />
        </div>
      </div>
    </div>
  );
};

export default AboutPerson;
