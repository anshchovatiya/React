import { TheLookSectionData } from "../../data/constants";
import styles from "./css/LookImageSection.module.css";
import React, { Fragment } from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className={`slider-container ${styles.ImageContainer}`}>
        <Slider {...settings}>
          {TheLookSectionData.map((currentImage,index) => {
            return (
              <div key={currentImage.altText+index}>
                <img src={currentImage.link} alt={currentImage.altText} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={`slider-container ${styles.WithoutSlider}`}>
        {TheLookSectionData.map((currentImage,index) => {
          return <Fragment key={currentImage+index}><img src={currentImage.link} alt={currentImage.altText} /></Fragment>;
        })}
      </div>
    </div>
  );
}

export default SimpleSlider;
