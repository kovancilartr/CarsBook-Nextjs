import HeroMain from "../_components/Hero/HeroMain";
import HomeAboutUs from "../_components/Sections/HomeAboutUs";
import HomeArticle from "../_components/Sections/HomeArticle";
import HomeOurFilo from "../_components/Sections/HomeOurFilo";
import HomeOurFleets from "../_components/Sections/HomeOurFleets";
import HomeService from "../_components/Sections/HomeService";
import HomeTypes from "../_components/Sections/HomeTypes";

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
