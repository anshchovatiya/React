
import PageHeader from "../helpers/PageHeader";
import TestimonialSlider from "../helpers/TestimonialSlider";
import SectionHead from "../helpers/SectionHead";
import CardShowCaseSlider from "../helpers/CardShowCaseSlider";
import slideImage1 from "../../assets/images/black-1.jpg";
import slideImage2 from "../../assets/images/orange-1.jpg";
import slideImage3 from "../../assets/images/white-1.jpg";

import CartMainSection from "../main/CartMainSection";

const Products = {
  id: 1,
  tittle: "Ribbed Tank Top",
  price: "16.35",
  colorWithImage: [
    { color: "#ffa500", image: slideImage2 },
    { color: "#000000", image: slideImage1 },
    { color: "#ffffff", image: slideImage3 },
  ],
  sizes: ["S", "M", "L", "XL"],
};




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
        products={Products}
        className="my-[15px] md:mt-[40px]  max-w-[1500px] px-[15px] lg:px-12 mx-auto"
      />
    </div>
  );
};

export default ShopCart;
