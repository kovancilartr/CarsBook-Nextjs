import React from "react";
import { carsData } from "@/constans";
import SectionTitle from "../SectionTitle";
import CardItem from "../CardItem";

const HomeOurFilo = () => {
  return (
    <div>
      <SectionTitle
        title="Our Filo"
        titleTwo="Amet consectetur adipisicing elit"
      />
      <div className="px-4 md:px-6 lg:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mb-8 gap-8 2xl:gap-4">
        {carsData.slice(0, 20).map((car, index) => (
          <CardItem key={index} car={car} currency="dolar" />
        ))}
      </div>
    </div>
  );
};

export default HomeOurFilo;
