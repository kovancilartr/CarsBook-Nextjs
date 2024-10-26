import React from "react";
import { servicesData } from "@/constans";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import ButtonArrow from "../ButtonArrow";
import { Button } from "@/components/ui/button";

const HomeService = () => {
  return (
    <div className="relative px-4 md:px-16 rounded-4xl my-12">
      <div className="absolute inset-0 bg-center bg-no-repeat bg-service-bg opacity-10 pointer-events-none"></div>
      <div className="serviceBg rounded-4xl pt-2 pb-20">
        <SectionTitle
          title="Our Services"
          titleTwo="We offer the best services"
        />
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="rounded-3xl bgone group p-8">
              <Image alt="" src={service.image} width={70} height={70} />
              <div className="mt-8 space-y-6">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-sm">{service.description}</p>
              </div>

              <div className="flex flex-row mt-8">
                <ButtonArrow href="/w" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center text-center mt-14">
          <div className="max-w-3xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              ut unde incidunt rerum reprehenderit nisi. Obcaecati commodi
              dignissimos excepturi aliquid cupiditate porro a fugiat eveniet?
            </p>
          </div>
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

export default HomeService;
