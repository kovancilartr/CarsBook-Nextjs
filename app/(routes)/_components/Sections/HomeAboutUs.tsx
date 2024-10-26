import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaRegSnowflake } from "react-icons/fa";
import { FcAreaChart, FcMultipleDevices } from "react-icons/fc";
import ButtonArrow from "../ButtonArrow";

const HomeAboutUs = () => {
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
          <h1 className="text-myprimary text-base md:text-lg flex font-semibold items-center mb-4">
            <FaRegSnowflake /> About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo
            error tempora officia ex harum voluptatem, reprehenderit tenetur
            sapiente est?
          </p>
          <div className="flex flex-row h-36 mt-5 gap-4 border-b">
            <div>
              <FcAreaChart className="w-20 h-20" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-sm font-extralight text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quae cum quaerat repellat exercitationem consequatur magni ab,
                voluptatibus veniam voluptatem.
              </p>
            </div>
          </div>
          <div className="flex flex-row h-36 mt-5 gap-4">
            <div>
              <FcMultipleDevices className="w-20 h-20" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-sm font-extralight text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quae cum quaerat repellat exercitationem consequatur magni ab,
                voluptatibus veniam voluptatem.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 group items-center">
            <Button variant="myButton" size="lgRounded">
              Contact Us
            </Button>
            <ButtonArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
