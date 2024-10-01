import React, { useRef, useState } from "react";
import { LuLeaf } from "react-icons/lu";
import { BiSolidPyramid } from "react-icons/bi";
import { PiCubeFocusLight } from "react-icons/pi";
import Slider from "react-slick";
import { renderStar } from "../helpers/TestimonialCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function EcomusIntro() {
  return (
    <div>
      <div className="py-[65px] text-center border-b">
        <h3 className="text-[22px] md:text-[32px] lg:text-[42px]">
          We are Ecomous
        </h3>
        <p className="lg:max-w-[600px] m-auto text-[14px] md:text-[16px] mt-[18px]">
          Welcome to our classic women's clothing store, where we believe
          <br className="lg:block hidden"></br> that timeless style never goes
          out of fashion. Our collection features classice
          <br className="lg:block hidden"></br> pieces that are both stylish and
          versatile, perfect for building ae
          <br className="lg:block hidden"></br> wardrobe that will last for
          years.
        </p>
      </div>
      <div className="grid text-center md:text-left md:grid-cols-2 my-12 md:mt-[100px] md:mb-[78px] gap-[30px]">
        <div>
          <img
            src="/images/about-intro-1.jpg"
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
          <img src="/images/about-intro-2.jpg" alt="Establised" className="w-[80%] pb-[50px]" />
          <img
            src="/images/about-intro-3.jpg"
            alt="Establised"
            className="absolute bottom-0 w-[42%] right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default EcomusIntro;

function QualitySection() {
  return (
    <div className="bg-[#fbf7f0] p-[51px_15px_85px] min-1150:p-[109px_90px_132px] text-center">
      <h3 className="text-[22px] md:text-[32px] lg:text-[42px] font-medium">
        Quality is our priority
      </h3>
      <p className="mt-[18px] mb-[50px]">
        Our talented stylists have put together outfits that are perfect for the
        season.
        <br /> They've variety of ways to inspire your next fashion-forward
        look.
      </p>
      <div className="flex gap-[30px]">
        <QualityItem
          tittle="High-Quality Materials"
          description="Crafted with precision and excellence, our activewear is meticulously engineered using premium materials to ensure unmatched comfort and durability."
          icon={<LuLeaf />}
        />
        <QualityItem
          tittle="Laconic Design"
          description="Simplicity refined. Our activewear embodies the essence of minimalistic design, delivering effortless style that speaks volumes."
          icon={<BiSolidPyramid />}
          className="max-sm:hidden"
        />
        <QualityItem
          tittle="Various Sizes"
          description="Designed for every body and anyone, our activewear embraces diversity with a wide range of sizes and shapes, celebrating the beauty of individuality."
          icon={<PiCubeFocusLight />}
          className="max-md:hidden"
        />
      </div>
    </div>
  );
}

function QualityItem({ icon, tittle, description, className }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="text-[45px] p-5 border border-black rounded-full mb-8">
        {icon}
      </span>
      <p className="text-[18px] md:text-[28px]">{tittle}</p>
      <p className="text-[14px] text-[rgb(84,84,84)] mt-[10px]">
        {description}
      </p>
    </div>
  );
}

function ReviewDoubleSlider() {

  let [currentSlide,setCurrentSlide] = useState("first");

  let SlickSlider1 = useRef();
  let SlickSlider2 = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    cssEase:"ease-in-out"
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    cssEase:"ease-in-out"
  };

  function handleNextButton(event) {
    if (SlickSlider1.current && SlickSlider2.current && currentSlide!=="second") {
      SlickSlider1.current.slickNext();
      SlickSlider2.current.slickNext();
      setCurrentSlide("second");
    }
  }
  function handlePreviousButton(event) {
    if (SlickSlider1.current && SlickSlider2.current && currentSlide!=="first") {
      SlickSlider1.current.slickPrev();
      SlickSlider2.current.slickPrev();
      setCurrentSlide("first");
    }
  }

  return (
    <div className="grid md:grid-cols-2 py-[80px] min-1150:py-[130px] max-md:sm-[50px] border-b">
      <div className="my-auto !max-w-full overflow-hidden">
        <Slider
          {...settings}
          className="CustomerReviewText "
          ref={SlickSlider1}
        >
          <ReviewSliderItem
            tittle="Our customer’s reviews"
            stars={5}
            description="I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is always fast and the customer service team is friendly and helpful. I highly recommend this site to anyone looking for affordable clothing."
            name="Robert smith"
            image={SliderImage1}
            />
          <ReviewSliderItem
            tittle="Our customer’s reviews"
            stars={4}
            description="I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is always fast and the customer service team is friendly and helpful. I highly recommend this site to anyone looking for affordable clothing."
            name="Jenifer Unix"
            image={SliderImage2}
          />
        </Slider>
        <div className="flex mt-8 *:p-2 *:border *:rounded-full *:text-[rgba(0,0,0,0.4)] gap-2 cursor-pointer">
          <span onClick={handlePreviousButton} className={`${!(currentSlide === "first") ? "!text-black border-black" : ""}`}>
            <IoIosArrowBack />
          </span>
          <span onClick={handleNextButton} className={`${!(currentSlide === "second") ? "!text-black border-black" : ""}`}>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <div className="max-md:hidden">
        <Slider
          {...settings2}
          className="CustomerReviewImage"
          ref={SlickSlider2}
        >
          <div>
            <img src={SliderImage1} alt="slider demo image 1" />
          </div>
          <div>
            <img src={SliderImage2} alt="slider demo image 2" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export { QualitySection, ReviewDoubleSlider };

function ReviewSliderItem({ tittle, stars, description, name, image }) {
  return (
    <div>
      <h3 className="text-[22px] md:text-[32px] lg:text-[42px] mb-[20px]">
        {tittle}
      </h3>
      <img src="" alt="Quote" className="mb-4 lg:mb-[22px]" />
      <div className="flex gap-[7px] text-[#ff7b54] mb-[16px] lg:mb-[24px]">
        {renderStar(stars)}
      </div>
      <p className="text-[16px] min-1150:text-[20px] mb-[24px] md:pr-[30px]">
        "{description}"
      </p>
      <div className="flex gap-[16px]">
        <img
          src=""
          alt="slider demo image 1"
          className="md:!hidden h-[70px]"
        />
        <p className="text-[14px] font-semibold">{name}</p>
      </div>
    </div>
  );
}
