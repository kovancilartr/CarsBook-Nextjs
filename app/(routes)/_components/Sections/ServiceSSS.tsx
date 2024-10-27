import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionData } from "@/constans";

const ServiceSSS = () => {
  return (
    <div className="container my-10 shadow-xl rounded-xl dark:shadow-mysecondary dark:shadow-md">
      <div className="bgone flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="w-full md:w-[50%]">
          <Image
            src="/aboutus/about.png"
            width={500}
            height={600}
            alt="About us"
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <Accordion type="single" collapsible className="w-full">
            {accordionData.map((item, index) => (
              <AccordionItem value={item.value} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ServiceSSS;
