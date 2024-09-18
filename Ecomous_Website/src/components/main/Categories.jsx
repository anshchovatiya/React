import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./css/Categories.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ImArrowUpRight2 } from "react-icons/im";
import { HomeCategoriesData } from "../../data/constants";
import { CatagoriesCard } from "../../data/imports";

function Categories() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const slider = useRef(null);

  // handle buttons of changing slides
  const handleBeforeChange = (oldIndex, newIndex) => {
    if (newIndex === 0) {
      setIsBeginning(true);
      setIsEnd(false);
    } else if (
      newIndex >=
      slider.current.innerSlider.state.slideCount -
        slider.current.innerSlider.props.slidesToShow
    ) {
      setIsEnd(true);
      setIsBeginning(false);
    } else {
      setIsBeginning(false);
      setIsEnd(false);
    }
  };

  return (
    <div className={`${styles.Categories} Categories overflow-x-hidden`}>
      <div className={styles.arrows}>
        <div>
          <span
            className={isBeginning ? styles.disable : ""}
            onClick={() => {
              slider?.current?.slickPrev();
            }}
          >
            <IoIosArrowBack />
          </span>
          <span
            className={isEnd ? styles.disable : ""}
            onClick={() => {
              slider?.current?.slickNext();
            }}
          >
            <IoIosArrowForward />
          </span>
        </div>
        <p className="Albert-normal">SHOP BY CATEGORIES</p>
      </div>

      <div className={`slider-container ${styles.SliderContainer}`}>
        <Slider
          className={styles.productSlider}
          infinite={false}
          speed={800}
          slidesToShow={3}
          slidesToScroll={2}
          dots={false}
          arrows={false}
          cssEase="ease-in-out"
          responsive={[
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
          ref={slider}
          beforeChange={handleBeforeChange}
        >
          {HomeCategoriesData.map((product, index) => {
            return (
              <div key={product.category + index}>
                <CatagoriesCard
                  image={product.link}
                  altText={product.altText}
                  Text={product.category}
                />
              </div>
            );
          })}
        </Slider>
        <div className={styles.sliderFixed}>
          <img src="./images/home-categories-06.avif" alt="Wide variety of products" />
          <div className={` Albert-normal ${styles.FixedText}`}>
            <p>Discover all new items</p>
            <span>
              <ImArrowUpRight2 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
