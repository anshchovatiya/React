import { useEffect, useState } from "react";
import styles from "./css/ProductDisplayCard.module.css";

const ProductDisplayCard = ({ product }) => {
  let [currentColorImage, setCurrentColorImage] = useState({
    ...product.colorWithImage[0],
  });
  let [currentColor,setCurrentColor] = useState(null);

  function handleMouseClick(obj, event) {
    setCurrentColorImage(obj);
    setCurrentColor(obj.color);
  }
  return (
    <div className="pb-2">
      <div className={styles.ImageContainer} >
        <img  id="ProductImage"
          className={styles.ProductImage}
          src={currentColorImage.image}
          alt="Product Image"
        />
      </div>
      <div className={styles.CardInfo}>
        <p>{product.tittle}</p>
        <p>&#36;{product.price}</p>
        <div className={styles.colorContainer}>
          {product?.colorWithImage.map((current,index,array) => {
            return (
              <div
                key={current.color}
                className={`${styles.colorBox} mx-1 mb-1 ${currentColor === current.color && "colorHover"}`}
                style={{ "--my-product-color": current.color }}
                onClick={(event) => {
                  handleMouseClick(current, event);
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
  