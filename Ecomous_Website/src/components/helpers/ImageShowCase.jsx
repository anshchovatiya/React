import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import Slider from "react-slick";
import { ShopGramSectionData } from "../../data/constants";



function renderShopGramItems(){
 return  ShopGramSectionData.map((currentItem,index) => {
    return (
      <div className="relative group overflow-hidden rounded-[8px]" key={currentItem.alt+index}>
        <img
          className="duration-1000 group-hover:scale-105"
          src={currentItem.link}
          alt={currentItem.alt}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 group-hover:bg-[#0000003d] duration-700 cursor-pointer">
          <span className="text-[15px] p-3 rounded-full bg-white hover:bg-black hover:text-white duration-700 hidden group-hover:block">
            <PiShoppingCartBold />
          </span>
        </div>
      </div>
    );
  })
}


const ImageShowCase = ({ className }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
  };


  return (
    <div
      className={`max-w-[1500px] mx-auto mb-8 px-[18px] lg:px-12 ${className}`}
    >
      <div className="grid w-full grid-cols-5 gap-2 *:*:rounded-[8px] *:*:h-full *:*:w-full *:overflow-hidden max-[1150px]:hidden">
        {renderShopGramItems()}
      </div>
      <dir className="min-[1150px]:hidden">
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
          className="PhotoGalarySlider"
        >
          {renderShopGramItems()}
        </Slider>
      </dir>
    </div>
  );
};

export default ImageShowCase;
