"use client";
import dynamic from "next/dynamic";

const HeroMain = dynamic(() => import("../_components/Hero/HeroMain"), {ssr: false});
const HomeAboutUs = dynamic(() => import("../_components/Sections/HomeAboutUs"), {ssr: false});
const HomeOurFleets = dynamic(() => import("../_components/Sections/HomeOurFleets"), {ssr: false});
const HomeTypes = dynamic(() => import("../_components/Sections/HomeTypes"), {ssr: false});
const HomeOurFilo = dynamic(() => import("../_components/Sections/HomeOurFilo"), {ssr: false});
const HomeService = dynamic(() => import("../_components/Sections/HomeService"), {ssr: false});
const HomeArticle = dynamic(() => import("../_components/Sections/HomeArticle"), {ssr: false});

export default function Home() {
  return (
    <div>
      <HeroMain />
      <div className="h-[550px] md:h-[250px] lg:h-[150px] xl:h-0"></div>
      <HomeOurFleets />
      <HomeTypes />
      <HomeOurFilo />
      <HomeAboutUs />
      <HomeService />
      <HomeArticle />
    </div>
  );
}
