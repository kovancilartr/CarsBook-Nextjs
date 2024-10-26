import React from "react";
import Link from "next/link";
import { HeaderDataProps } from "@/constans";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const HeaderItem = ({ href, label }: HeaderDataProps) => {
  return (
    <Link
      className={`${poppins.className} font-semibold hover:text-myprimary transition duration-500`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default HeaderItem;
