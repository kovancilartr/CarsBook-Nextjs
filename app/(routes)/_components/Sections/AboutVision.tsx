import React from "react";
import SectionTitle from "../SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { missionData } from "@/constans";
import Image from "next/image";
import { FaRegSnowflake } from "react-icons/fa";

const AboutVision = () => {
  return (
    <div className="w-full">
      <SectionTitle
        title="Vision and Mission"
        titleTwo="Our Vision and Mission"
      />
      <div className="flex items-center justify-center w-full mb-20">
        <Tabs defaultValue="vision" className="w-full">
          <TabsList className="flex container justify-center">
            <TabsTrigger value="vision">Our Vision</TabsTrigger>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
          </TabsList>
          {missionData.map((item, index) => (
            <TabsContent
              value={item.keys}
              key={index}
              className="w-full relative container"
            >
              <div className="w-full flex flex-col md:flex-row items-center justify-center rounded-4xl space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full md:w-2/3">
                  <div className="flex flex-col space-y-5 p-4">
                    <h1 className="text-myprimary text-lg md:text-xl mb-4 font-semibold flex flex-row">
                      <FaRegSnowflake className="mr-2" /> {item.title}
                    </h1>
                    <p className="text-base md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam quidem nam numquam quisquam atque beatae.
                    </p>
                    <p className="text-base md:text-lg">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime sunt eligendi distinctio officia porro consectetur
                      unde, vel corporis pariatur nesciunt!
                    </p>

                    <ul className="list-none space-y-2 mt-4">
                      <li className="flex items-center text-base md:text-lg">
                        <FaRegSnowflake className="text-myprimary mr-2" />{" "}
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam, ut?
                      </li>
                      <li className="flex items-center text-base md:text-lg">
                        <FaRegSnowflake className="text-myprimary mr-2" /> Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, modi.
                      </li>
                      <li className="flex items-center text-base md:text-lg">
                        <FaRegSnowflake className="text-myprimary mr-2" /> Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/3 relative shadow-xl overflow-hidden group bgone">
                  <Image
                    alt=""
                    src={item.image}
                    width={565}
                    height={678}
                    className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-55 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default AboutVision;
