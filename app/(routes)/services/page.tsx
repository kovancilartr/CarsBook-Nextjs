"use client";
import React from "react";
import dynamic from "next/dynamic";

const SectionBg = dynamic(() => import("../_components/SectionBg"), {ssr: false});
const HomeService = dynamic(() => import("../_components/Sections/HomeService"), {ssr: false});
const AboutPerson = dynamic(() => import("../_components/Sections/AboutPerson"), {ssr: false});
const Testiomonials = dynamic(() => import("../_components/Sections/Testiomonials"), {ssr: false});
const ServiceSSS = dynamic(() => import("../_components/Sections/ServiceSSS"), {ssr: false});
const WhyChooise = dynamic(() => import("../_components/Sections/WhyChooise"), {ssr: false});

const Services = () => {
  return (
    <div>
      <SectionBg title="Services" source="Home" />
      <ServiceSSS />
      <HomeService />
      <WhyChooise />
      <AboutPerson />
      <Testiomonials />
    </div>
  );
};

export default Services;
