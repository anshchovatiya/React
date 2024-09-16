import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductDisplayCard from "../common/ProductDisplayCard";
const   CardShowCaseSlider = ({ tittle, products,className }) => {
  const setting = {
    perPage: 4,
    perMove:2,
    gap:"30px",
    dots: false,
    pagination:false,
    breakpoints:{
      768:{
        perPage:2
      },
      1024:{
        perPage:3
      }
    }
  };

  return (
    <div className={`p-[15px] ${className}`}>
      <p className="mb-[30px] md:mb-[50px] lg:mb-[60px] text-[22px] md:text-[32px] lg:text-[42px] text-center font-normal">
        {tittle}
      </p>
      <div>
        <Splide hasTrack={false} aria-label="..." options={setting} className="group cursor-pointer">
          <div className="custom-wrapper">
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--next hover:bg-white !top-[calc(50%-50px)] !h-[50px] !w-[50px] !hidden group-hover:!flex">
                <IoIosArrowForward />
              </button>

              <button className="splide__arrow splide__arrow--prev hover:bg-white !top-[calc(50%-50px)] !h-[50px] !w-[50px] !hidden !group-hover:block group-hover:!flex">
                <IoIosArrowBack className="!rotate-[-deg] text-[16px]" />
              </button>
            </div>

            <SplideTrack>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
              <SplideSlide>
                <ProductDisplayCard product={products} />
              </SplideSlide>
            </SplideTrack>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default CardShowCaseSlider;
