/* eslint-disable no-unused-vars */
import React from "react";
import HeroSectionSlider from "../main/HeroSection";
import OffersMarquee from "../helpers/OffersMarquee";
import Categories from "../main/Categories";
import BestSeller from "../main/BestSeller";
import TheLook from "../main/TheLook";
import Testimonial from "../main/Testimonial";
import ShopGram from "../main/ShopGram";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSectionSlider />
      <OffersMarquee />
      <Categories />
      <BestSeller />
      <TheLook />
      <Testimonial />
      <ShopGram />
      <Footer />
    </>
  );
};

export default HomePage;
