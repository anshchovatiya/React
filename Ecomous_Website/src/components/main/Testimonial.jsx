import styles from "./css/Testimonial.module.css";
import {
  SectionHead,
  TestimonialSlider,
  TestimonialsBrands,
} from "../../data/imports";

const Testimonial = () => {
  return (
    <div className={`${styles.TestimonialContainer} overflow-x-hidden`}>
      <SectionHead
        tittle="Happy Clients"
        description="Hear what they say about us"
      />
      <TestimonialSlider />
      <TestimonialsBrands />
    </div>
  );
};

export default Testimonial;
