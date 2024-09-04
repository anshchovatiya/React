import image1 from "../../assets/images/lookbook-3.jpg";
import image2 from "../../assets/images/lookbook-4.jpg";
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
          <div>
            <img src={image1} alt="Fashion Product Image" />
          </div>
          <div>
            <img src={image2} alt="Fashion Product Image" />
          </div>
        </Slider>
      </div>
      <div className={`slider-container ${styles.WithoutSlider}`}>
        <img src={image1} alt="Fashion Product Image" />
        <img src={image2} alt="Fashion Product Image" />
      </div>
    </div>
  );
}

export default SimpleSlider;
