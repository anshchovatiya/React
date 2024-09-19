import { useState } from "react";
import styles from "./css/ProductDisplayCard.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { LuEye } from "react-icons/lu";

const ProductDisplayCard = ({ product }) => {
  let [currentColorImage, setCurrentColorImage] = useState(
    product.colorWithImage[0]
  );
  let [currentColor, setCurrentColor] = useState(
    product.colorWithImage[0].color
  );

  function handleMouseClick(obj) {
    setCurrentColorImage(obj);
    setCurrentColor(obj.color);
  }
  return (
    <div className="pb-2">
      <div
        className={`${styles.ImageContainer} relative rounded-lg overflow-hidden group duration-300 cursor-pointer`}
      >
        <img
          id="ProductImage"
          className={`${styles.ProductImage} group-hover:opacity-0 duration-300 `}
          src={currentColorImage.link}
          alt={currentColorImage.altText}
        />
        <div className=" group-hover:block absolute h-full w-full  group-hover:z-50 opacity-0 group-hover:opacity-100 top-0 left-0 overflow-hidden rounded  hover:scale-105 duration-700 ">
          <div className="relative h-full w-full">
            <img
              src={product.hoverImage.link}
              alt={product.hoverImage.altText}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-[4.3%] left-0 w-full">
              <div className="group-hover:flex justify-center gap-2 *:p-[5%] text-sm *:bg-white *:rounded *:font-bold *:mb-3 hidden ProductCardIcons px-4">
                <div className="  hover:bg-black hover:text-white duration-300">
                  <FiShoppingBag />
                </div>
                <div className=" hover:bg-black hover:text-white duration-300">
                  <FaRegHeart />
                </div>
                <div className=" hover:bg-black hover:text-white duration-300">
                  <TbArrowsCross />
                </div>
                <div className=" hover:bg-black hover:text-white duration-300">
                  <LuEye />
                </div>
              </div>

              {product.sizes && (
                <div className="hidden bg-[#0000003d] group-hover:flex justify-center gap-3 text-[10px] md:text-xs py-2 -mb-[8px] md:py-3 text-white font-semibold  ProductCardSize">
                  {product.sizes.map((size) => {
                    return <span key={size}>{size}</span>;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.CardInfo}>
        <p>{product.tittle}</p>
        <p>&#36;{product.price}</p>
        <div className={styles.colorContainer}>
          {product.colorWithImage.map((current, index, array) => {
            return (
              <div
                key={current.color}
                className={`${styles.colorBox} mx-1 mb-1 ${
                  currentColor === current.color && "colorHover"
                }`}
                style={{ "--my-product-color": current.color }}
                onClick={() => {
                  handleMouseClick(current);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
