import React from "react";
import Intro1 from "../../assets/images/collection-69.jpg";
import Intro2 from "../../assets/images/collection-70.jpg";
import Intro3 from "../../assets/images/collection-71.jpg";
const EcomusIntro = () => {
  return (
    <div>
      <div className="py-[65px] text-center border-b">
        <h3 className="text-[22px] md:text-[32px] lg:text-[42px]">
          We are Ecomous
        </h3>
        <p className="lg:max-w-[600px] m-auto text-[14px] md:text-[16px] mt-[18px]">
          Welcome to our classic women's clothing store, where we believe
          <br class="lg:block hidden"></br> that timeless style never goes out
          of fashion. Our collection features classice
          <br class="lg:block hidden"></br> pieces that are both stylish and
          versatile, perfect for building ae<br class="lg:block hidden"></br>{" "}
          wardrobe that will last for years.
        </p>
      </div>
      <div className="grid text-center md:text-left md:grid-cols-2 my-12 md:mt-[100px] md:mb-[78px] gap-[30px]">
        <div>
          <img
            src={Intro1}
            alt="Establised"
            className="w-full h-full rounded"
          />
        </div>
        <div className="lg:max-w-[500px] m-auto">
          <h3 className="text-[28px]">Established - 1995</h3>
          <p className="mt-4 text-[14px] text-[rgb(84,84,84)]">
            Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
            passion for timeless style. Jane had always been drawn to classic
            pieces that could be worn season after season, and she believed that
            there was a gap in the market for a store that focused solely on
            classic women's clothing. She opened the first store in a small town
            in New England, where it quickly became a local favorite.
          </p>
        </div>
      </div>
      <div className="grid text-center md:text-left md:grid-cols-2 my-12 md:mt-[150px] md:mb-[78px] gap-[30px]">
        <div className="lg:max-w-[500px] m-auto">
          <h3 className="text-[28px]">Our mission</h3>
          <p className="mt-4 text-[14px] text-[rgb(84,84,84)] md:mb-[50px]">
            Our mission is to empower people through sustainable fashion. We
            want everyone to look and feel good, while also doing our part to
            help the environment.We believe that fashion should be stylish,
            affordable and accessible to everyone. Body positivity and
            inclusivity are values that are at the heart of our brand.
          </p>
        </div>
        <div className="relative">
          <img src={Intro2} alt="Establised" className="w-[80%] pb-[50px]" />
          <img
            src={Intro3}
            alt="Establised"
            className="absolute bottom-0 w-[42%] right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default EcomusIntro;
