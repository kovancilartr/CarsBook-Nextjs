import React from "react";
import SectionTitle from "../SectionTitle";
import { whyChooseUsData } from "@/constans";
import Image from "next/image";

const WhyChooise = () => {
  return (
    <section className="bgone py-16">
      <div className="container mx-auto text-center">
        <SectionTitle
          title="Why Choose Us?"
          titleTwo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, exercitationem."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col gap-8">
            {whyChooseUsData.slice(0, 2).map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-myprimary p-4 rounded-full">
                  <Image
                    src={item.icon}
                    width={70}
                    height={70}
                    alt="Why Choose Us?"
                    className="w-16 h-auto"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="font-thin">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src="/aboutus/about.png"
              width={500}
              height={600}
              alt="About us"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            {whyChooseUsData.slice(0, 2).map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-myprimary p-4 rounded-full">
                  <Image
                    src={item.icon}
                    width={70}
                    height={70}
                    alt="Why Choose Us?"
                    className="w-16 h-auto"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="font-thin">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooise;
