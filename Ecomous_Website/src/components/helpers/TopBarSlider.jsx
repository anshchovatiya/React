import React from "react";
import Slider from "react-slick";
import styles from "./css/TopBarSlider.module.css";
import { LuArrowUpRight } from "react-icons/lu";

function TopBarSlider() {
  return (
    <div className={`slider-container ${styles.TopBarSlider}`}>
      <Slider autoplay={true} infinite={true} autoplaySpeed={5000}>
        <div>
          <p>Summer sale Discount 70%</p>
        </div>
        <div>
          <div>
            <div className={styles.FashionText}>
              <span>Spring Fashion Sale</span>{" "}
              <a href="#" className={styles.shopText}>
                Shop now
                <span>
                  <LuArrowUpRight />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>Time to refresh your Wardrobe</p>
        </div>
      </Slider>
    </div>
  );
}

export default TopBarSlider;
