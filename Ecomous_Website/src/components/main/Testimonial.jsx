import styles from "./css/Testimonial.module.css";
import SectionHead from "../helpers/SectionHead";
import TestimonialSlider from "../helpers/TestimonialSlider";
import TestimonialsBrands from "../helpers/TestimonialsBrands";

const Testimonial = () => {

  return (
    <div className={`${styles.TestimonialContainer} overflow-x-hidden`}>
      <SectionHead
        tittle="Happy Clients"
        description="Hear what they say about us"
      />
      <TestimonialSlider/>
      <TestimonialsBrands/>
    </div>
  );
};

export default Testimonial;
