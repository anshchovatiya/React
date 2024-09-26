
import PageHeader from "../helpers/PageHeader";
import TestimonialSlider from "../helpers/TestimonialSlider";
import SectionHead from "../helpers/SectionHead";
import CardShowCaseSlider from "../helpers/CardShowCaseSlider";

import CartMainSection from "../main/CartMainSection";
import { ProductShowCaseSliderOne } from "../../data/constants";




const ShopCart = () => {
  return (
    <div className="px-[8px]">
      <PageHeader tittle={"Shopping Cart"} />
      <CartMainSection />

      <div className="mt-5">
        <SectionHead
          tittle="Happy Clients"
          description="Hear what they say about us"
        />
        <TestimonialSlider />
      </div>
      <CardShowCaseSlider
        tittle="People Also Bought"
        products={ProductShowCaseSliderOne}
        className="my-[15px] md:mt-[40px]  max-w-[1500px] px-[15px] lg:px-12 mx-auto"
      />
    </div>
  );
};

export default ShopCart;
