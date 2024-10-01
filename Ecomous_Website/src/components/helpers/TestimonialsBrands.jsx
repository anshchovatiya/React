import styles from "./css/TestimonialsBrands.module.css";

import Slider from "react-slick";

const TestimonialsBrands = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div className={styles.ProductGridContainer}>
      <div className={styles.ProductGrid}>
        <div className={styles.logoContainer}>
          <img src="/images/brand-logo-01.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/brand-logo-02.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/brand-logo-03.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/brand-logo-04.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/brand-logo-05.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src="/images/brand-logo-06.png" alt="" />
        </div>
      </div>

      <Slider
        {...settings}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
        className={`${styles.ProductGridResponsive} ProductGridResponsive`}
      >
        <div className={styles.logoContainer}>
        <img src="/images/brand-logo-01.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
        <img src="/images/brand-logo-02.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
        <img src="/images/brand-logo-03.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
        <img src="/images/brand-logo-04.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
        <img src="/images/brand-logo-05.png" alt="" />
        </div>
        <div className={styles.logoContainer}>
        <img src="/images/brand-logo-06.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialsBrands;
