"use client";
import React from 'react'
import dynamic from "next/dynamic";

const SectionBg = dynamic(() => import('../_components/SectionBg'), {ssr: false});
const AboutLogo = dynamic(() => import('../_components/Sections/AboutLogo'), {ssr: false});
const Testiomonials = dynamic(() => import('../_components/Sections/Testiomonials'), {ssr: false});
const ContactSection = dynamic(() => import('../_components/Sections/ContactSection'), {ssr: false});

const Contact = () => {
  return (
    <div>
      <SectionBg title="Contact" source="Home" />
      <ContactSection />
      <AboutLogo />
      <Testiomonials />
    </div>
  )
}

export default Contact