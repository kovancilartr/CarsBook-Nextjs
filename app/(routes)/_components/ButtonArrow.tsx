import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonArrowProps {
  href?: string;
  size?: "small" | "large";
}

const ButtonArrow = ({ href, size }: ButtonArrowProps) => {
  const buttonClass = size === "small" ? "p-1 text-xl" : "p-4 text-2xl";

  return (
    <Link
      href={href ? href : "#"}
      className={`flex ${buttonClass} rounded-full text-white bg-myprimary items-center justify-center`}
    >
      <FiArrowUpRight className="transition-transform duration-500 group-hover:rotate-90" />
    </Link>
  );
};

export default ButtonArrow;
