import React from "react";
import SectionTitle from "../SectionTitle";
import { blogData } from "@/constans";
import Image from "next/image";
import { Calendar } from "lucide-react";
import ButtonArrow from "../ButtonArrow";

const HomeArticle = () => {
  return (
    <div className="container mx-auto mb-20 px-4">
      <SectionTitle
        title="Latest Articles"
        titleTwo="Stay informed and inspired for your next journey"
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-full lg:w-3/5 relative group mb-8 lg:mb-0">
          {blogData.slice(0, 1).map((blog, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl w-full h-full lg:h-[678px]"
            >
              <Image
                alt={blog.title}
                src={blog.image}
                width={565}
                height={678}
                className="rounded-3xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-20"></div>

              <div className="absolute bottom-8 left-4 w-[70%] text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar />
                  <h1>{blog.date}</h1>
                </div>
                <p className="text-xl font-semibold">{blog.title}</p>
                <div className="flex mt-4">
                  <ButtonArrow href={blog.href} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/5 space-y-8">
          {blogData.slice(1, 4).map((blog, index) => (
            <div
              key={index}
              className="relative group flex flex-row md:flex-row gap-4"
            >
              <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden h-[204px]">
                <Image
                  alt={blog.title}
                  src={blog.image}
                  width={565}
                  height={678}
                  className="rounded-3xl object-cover w-full h-full"
                />
                {/* Fotoğraf üstüne geldiğimizde efect özelliği */}
                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-20"></div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar />
                  <h1 className="text-xs font-semibold">{blog.date}</h1>
                </div>
                <p className="text-lg font-semibold">{blog.title}</p>
                <div className="mt-4 flex items-center gap-2 cursor-default">
                  <p className="font-semibold text-myprimary">
                    Detaylı Görüntüle
                  </p>
                  <ButtonArrow href={blog.href} size="small" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;
