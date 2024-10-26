import Link from "next/link";
import React from "react";

interface SectionBgProps {
  title: string;
  source: string;
}

const SectionBg = ({ title, source }: SectionBgProps) => {
  return (
    <div className="px-4 md:px-16 rounded-4xl">
      <div className="relative">
        <div className="px-4 md:px-16 rounded-4xl inset-0 bg-section-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-55 rounded-4xl"></div>
          <div className="relative z-10 p-8 md:p-16 lg:p-24 text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
              {title}
            </h1>
            <nav className="text-sm md:text-base lg:text-2xl">
              <ul className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-white">
                    {source}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-myprimary">{title}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBg;
