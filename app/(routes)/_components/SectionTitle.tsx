import { Nerko_One } from "next/font/google";
import React from "react";
import { FaRegSnowflake } from "react-icons/fa";

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
  return (
    <div className="container mt-16 mb-4 max-w-5xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-myprimary text-base md:text-lg mb-4 md:mb-2 font-semibold flex items-center justify-center gap-1">
          <FaRegSnowflake /> {title}
        </h1>

        <h1
          className={`${nerkone.className} text-xl md:text-4xl lg:text-6xl mb-4 textone font-semibold`}
        >
          {titleTwo}
        </h1>
        <p className="textone font-light text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
