import { headerData } from "@/constans";
import React from "react";

import HeaderItem from "./HeaderItem";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-myprimary">
          CarsBook
        </h1>
        <div className="hidden lg:flex lg:flex-row items-center justify-between mx-auto space-x-8">
          {headerData.map((item, index) => (
            <HeaderItem key={index} href={item.href} label={item.label} />
          ))}
        </div>

        <div className="flex flex-row items-center justify-center space-x-2">
          <ModeToggle />
          <MobileMenu />
          <Button className="ml-4" variant="myButton" size="smRounded">
            Giriş Yap / Kayıt Ol
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
