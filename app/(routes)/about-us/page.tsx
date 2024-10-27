"use client";
import React from "react";
import dynamic from "next/dynamic";

const SectionBg = dynamic(() => import("../_components/SectionBg"), {ssr: false});
const HomeAboutUs = dynamic(() => import("../_components/Sections/HomeAboutUs"), {ssr: false});
const AboutLogo = dynamic(() => import("../_components/Sections/AboutLogo"), {ssr: false});
const AboutVision = dynamic(() => import("../_components/Sections/AboutVision"), {ssr: false});
const AboutPerson = dynamic(() => import("../_components/Sections/AboutPerson"), {ssr: false});
const Testiomonials = dynamic(() => import("../_components/Sections/Testiomonials"), {ssr: false});

const AboutUs = () => {
  return (
    <div>
      <SectionBg title="About Us" source="Home" />
      <div className="flex items-center justify-center">
        <div className="max-w-6xl">
          <HomeAboutUs />
        </div>
      </div>
      <AboutLogo />
      <AboutVision />
      <AboutPerson />
      <Testiomonials />
    </div>
  );
};

export default AboutUs;
