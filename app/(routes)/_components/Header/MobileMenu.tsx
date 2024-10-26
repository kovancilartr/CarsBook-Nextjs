import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { headerData } from "@/constans";
import HeaderItem from "./HeaderItem";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="lg:hidden flex" />
      </SheetTrigger>
      <SheetContent className="bgone">
        <div className="flex flex-col space-y-6 mt-8">
          {headerData.map((item, index) => (
            <HeaderItem key={index} href={item.href} label={item.label} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
