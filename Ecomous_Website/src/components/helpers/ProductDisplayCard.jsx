import { useEffect, useState } from "react";
import styles from "./css/ProductDisplayCard.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/wishlist";
import { useToast } from "../../hooks/use-toast";
import { FaHeart } from "react-icons/fa";


function compareListWithProduct(wishList,product){
  let result = wishList.find((currentProduct)=>currentProduct.id === product.id)
  return (result ? true : false);
}



const ProductDisplayCard = ({ product }) => {


  const dispatch = useDispatch();
  const { toast } = useToast();
  const MainWhishList = useSelector((state) => state.wishlist);
  const [currentColorImage, setCurrentColorImage] = useState(product.colorWithImage[0]);
  const [currentColor, setCurrentColor] = useState(product.colorWithImage[0].color);


  const wishListIncludes = compareListWithProduct(MainWhishList,product);


  function handleMouseClick(obj) {
    setCurrentColorImage(obj);
    setCurrentColor(obj.color);
  }

  function handleAddToWishlist() {
    dispatch(addToWishlist(product));
    toast({
      description: "Item added to Whish list",
    });
  }

  function handleRemoveFromWishlist() {
    dispatch(removeFromWishlist(product));
    toast({
      description: "Item removed from Whish list",
    });
  }

  return (
    <div className="pb-2 group">
      <div
        className={`${styles.ImageContainer} relative rounded-lg overflow-hidden group/card duration-300 cursor-pointer`}
      >
        <img
          id="ProductImage"
          className={`${styles.ProductImage} group-hover/card:opacity-0 duration-300 `}
          src={currentColorImage.link}
          alt={currentColorImage.altText}
        />
        <div className=" group-hover/card:block absolute h-full w-full  group-hover/card:z-50 opacity-0 group-hover/card:opacity-100 top-0 left-0 overflow-hidden rounded  hover:scale-105 duration-700 ">
          <div className="relative h-full w-full">
            <img
              src={product.hoverImage.link}
              alt={product.hoverImage.altText}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-[4.3%] left-0 w-full">
              <div className="group-hover:flex justify-center gap-2  text-sm   hidden ProductCardIcons px-4">
                <div className="rounded bg-white font-bold mb-3 p-2 md:p-3 lg:p-4  hover:bg-black hover:text-white duration-300">
                  <FiShoppingBag />
                </div>

                <div className=" ">
                  {!wishListIncludes && (
                    <div className="rounded bg-white font-bold mb-3 p-2 md:p-3 lg:p-4 hover:bg-black hover:text-white duration-300"
                      onClick={handleAddToWishlist}
                    >
                      <FaRegHeart />
                    </div>
                  )}
                  {wishListIncludes && (
                    <div
                      className="rounded bg-white font-bold mb-3 p-2 md:p-3 lg:p-4 hover:bg-black hover:text-white duration-300"
                      onClick={handleRemoveFromWishlist}
                    >
                      <FaHeart className="text-red-600" />
                    </div>
                  )}
                </div>

                <div className="rounded bg-white font-bold mb-3 p-2 md:p-3 lg:p-4 hover:bg-black hover:text-white duration-300">
                  <TbArrowsCross />
                </div>
                <div className="rounded bg-white font-bold mb-3 p-2 md:p-3 lg:p-4 hover:bg-black hover:text-white duration-300">
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
