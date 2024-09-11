import React from "react";
import AboutUsHeroSection from "../main/AboutUsHeroSection";
import EcomusIntro, {
  QualitySection,
  ReviewDoubleSlider,
} from "../main/EcomusIntro";
import ImageShowCase from "../helpers/ImageShowCase";
import SectionHead from "../helpers/SectionHead";

const Introduction = () => {
  return (
    <>
      <AboutUsHeroSection />
      <div className="max-w-[1500px] px-[15px] md:px-[48px] m-auto">
        <EcomusIntro />
        <QualitySection />
        <ReviewDoubleSlider />
        <div className="my-14 max-md:my-10">
          <SectionHead
            tittle="Shop Gram"
            description="Inspire and let yourself be inspired, from one unique fashion to another."
          />
          <ImageShowCase className="mt-8" />
        </div>
      </div>
    </>
  );
};

export default Introduction;
