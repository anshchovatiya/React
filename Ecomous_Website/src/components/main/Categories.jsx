import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./css/Categories.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CatagoriesCard from "../helpers/CatagoriesCard";
import productDemoImage1 from "../../assets/images/collection-17.jpg";
import productDemoImage2 from "../../assets/images/collection-14.jpg";
import productDemoImage3 from "../../assets/images/collection-15.jpg";
import productDemoImage4 from "../../assets/images/collection-18.jpg";
import productDemoImage5 from "../../assets/images/collection-20.jpg";
import productDemoImage6 from "../../assets/images/Discover-image.avif";
import { ImArrowUpRight2 } from "react-icons/im";

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
    <div className={`${styles.Categories} Categories`}>
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
          <div>
            <CatagoriesCard image={productDemoImage1} Text="Clothing" />
          </div>
          <div>
            <CatagoriesCard image={productDemoImage2} Text="Sunglasses" />
          </div>
          <div>
            <CatagoriesCard image={productDemoImage3} Text="Bags" />
          </div>
          <div>
            <CatagoriesCard image={productDemoImage4} Text="Fashion" />
          </div>
          <div>
            <CatagoriesCard image={productDemoImage5} Text="Accessories" />
          </div>
        </Slider>
        <div className={styles.sliderFixed}>
          <img src={productDemoImage6} alt="product demo image" />
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
