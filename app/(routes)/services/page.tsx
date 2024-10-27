import React from "react";
import SectionBg from "../_components/SectionBg";
import AboutPerson from "../_components/Sections/AboutPerson";
import Testiomonials from "../_components/Sections/Testiomonials";
import HomeService from "../_components/Sections/HomeService";

const Services = () => {
  return (
    <div>
      <SectionBg title="Services" source="Home" />

      <HomeService />

      <AboutPerson />
      <Testiomonials />
    </div>
  );
};

export default Services;
