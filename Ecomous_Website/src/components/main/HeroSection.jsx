import React from "react";
import Slider from "react-slick";
import { HeroSlide,Header } from "../../data/imports";
import { HeroSliderData } from "../../data/constants";

export default function HeroSection() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 z-[999]">
        <Header />
      </div>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        className="HeroSectionSlider"
      >
        {HeroSliderData.map((currentSlide,index) => {
          return (
            <div key={currentSlide.tittle + index}>
              <HeroSlide
                imagePath={currentSlide.path}
                altText={currentSlide.altText}
                tittle={currentSlide.tittle}
                description={currentSlide.description}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
