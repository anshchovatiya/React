import Slider from "react-slick";
import styles from "./css/TestimonialSlider.module.css";
import TestimonialCard from "./TestimonialCard";
import img1 from "../../assets/images/orange-1.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow  ${styles.slideButton}`}
    >
      <FaChevronLeft />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow  ${styles.slideButton}`}
    >
      <FaChevronRight />
    </div>
  );
}

const TestimonialSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  let testimonials = {
    rating: 5,
    tittle: "Best Online Fashion Site",
    description:
      " I always find something stylish and affordable on this  web fashion site",
    author: "Robert Smith",
    location: "Customer from USA",
    productImage: img1,
    productName: "Jersey thong body",
    price: "105.95",
  };



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
    <Slider
      nextArrow={<SampleNextArrow to="prev" />}
      prevArrow={<SamplePrevArrow to="next" />}
      {...settings}
      arrows={true}
      className={`${styles.TestimonialSlider} TestimonialSlider`}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            dots:true,
            slidesToShow: 2,
          },
        },
      ]}
    >
      <div className={styles.Testimonial}>
        <TestimonialCard review={testimonials} />
      </div>
      <div className={styles.Testimonial}>
        <TestimonialCard review={testimonials} />
      </div>
      <div className={styles.Testimonial}>
        <TestimonialCard review={testimonials} />
      </div>
      <div className={styles.Testimonial}>
        <TestimonialCard review={testimonials} />
      </div>
      <div className={styles.Testimonial}>
        <TestimonialCard review={testimonials} />
      </div>
      <div className={styles.Testimonial}>
        <TestimonialCard review={testimonials} />
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
