import { TheLookSectionData } from "../../data/constants";
import styles from "./css/LookImageSection.module.css";
import React from "react";
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
          {TheLookSectionData.map((currentImage) => {
            return (
              <div>
                <img src={currentImage.link} alt={currentImage.altText} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={`slider-container ${styles.WithoutSlider}`}>
        {TheLookSectionData.map((currentImage) => {
          return <img src={currentImage.link} alt={currentImage.altText} />;
        })}
      </div>
    </div>
  );
}

export default SimpleSlider;
