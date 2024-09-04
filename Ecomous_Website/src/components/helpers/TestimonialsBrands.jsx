import styles from "./css/TestimonialsBrands.module.css";
import logo1 from "../../assets/images/brand-01.png";
import logo2 from "../../assets/images/brand-02.png";
import logo3 from "../../assets/images/brand-03.png";
import logo4 from "../../assets/images/brand-04.png";
import logo5 from "../../assets/images/brand-05.png";
import logo6 from "../../assets/images/brand-06.png";
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
          <img src={logo1} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo2} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo3} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo4} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo5} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo6} alt="" />
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
          <img src={logo1} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo2} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo3} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo4} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo5} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialsBrands;
