import React from "react";
import Slider from "react-slick";
import HeroSlide from "../helpers/HeroSlide";
import HeroImage1 from "../../assets/images/fashion-slideshow-01.jpg";
import HeroImage2 from "../../assets/images/fashion-slideshow-02.jpg";
import HeroImage3 from "../../assets/images/fashion-slideshow-03.jpg";

export default function HeroSection() {
  return (
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      className="HeroSectionSlider"
    >
      <div>
        <HeroSlide
          image={HeroImage1}
          tittle={"Glamorous Glam"}
          description={"From casual to formal, we've got you covered"}
        />
      </div>
      <div>
        <HeroSlide
          image={HeroImage2}
          tittle={"Simple Style"}
          description={"It’s creativity evolving with culture."}
        />
      </div>
      <div>
        <HeroSlide
          image={HeroImage3}
          tittle={"Timeless Appeal"}
          description={"Fashion is self-expression through style."}
        />
      </div>
    </Slider>
  );
}
