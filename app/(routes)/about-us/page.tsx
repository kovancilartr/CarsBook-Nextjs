import React from "react";
import SectionBg from "../_components/SectionBg";
import HomeAboutUs from "../_components/Sections/HomeAboutUs";
import AboutLogo from "../_components/Sections/AboutLogo";
import AboutVision from "../_components/Sections/AboutVision";
import AboutPerson from "../_components/Sections/AboutPerson";
import Testiomonials from "../_components/Sections/Testiomonials";

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
