import { footerData, socialMediaData } from "@/constans";
import React from "react";
import FooterItem from "./FooterItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";
import { ModeToggle } from "@/components/ModeToggle";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 mb-8">
      <footer className="relative py-8 px-6 md:px-8 bg-myDark-100 text-white rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-footer-bg opacity-10"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16">
            <div className="w-full lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-semibold text-myprimary">
                CarsBook
              </h1>
              <p className="mt-4 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora soluta ratione quo obcaecati blanditiis necessitatibus
                dolore laboriosam corrupti, omnis alias illo? Veritatis voluptas
                fugiat autem eos possimus non consequuntur esse.
              </p>
            </div>
            {footerData.map((section, index) => (
              <FooterItem
                key={index}
                items={section.items}
                title={section.title}
              />
            ))}
            <div className="lg:col-span-2">
              <h1 className="font-semibold text-white text-2xl">
                Bize ulaşabilirsiniz
              </h1>
              <div className="flex flex-row relative">
                <Input
                  className="text-white placewhite right-0 ring-transparent py-6 rounded-full max-w-60 bg-mysecondary mt-4 dark:bg-mysecondary"
                  placeholder="Email..."
                />
                <Button
                  variant="myButton"
                  className="absolute top-5 rounded-full left-[188px]"
                >
                  <FaEnvelope />
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-opacity-10 border-white mt-4"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
            <div>Kovancılar Yazılım</div>

            <div className="text-white text-sm">
              <ModeToggle footer={true} />
            </div>

            <div className="flex flex-row space-x-4 mt-4 lg:mt-0">
              {socialMediaData.map((item, index) => (
                <div
                  key={index}
                  className="border-2 p-2 rounded-full items-center justify-center hover:text-myprimary hover:border-myprimary transition duration-500"
                >
                  <item.icon className="h-6 w-6 hover:text-myprimary transition duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
