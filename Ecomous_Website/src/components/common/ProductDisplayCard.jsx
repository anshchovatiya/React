import { useEffect, useState } from "react";
import styles from "./css/ProductDisplayCard.module.css";

const ProductDisplayCard = ({ product }) => {
  let [currentColorImage, setCurrentColorImage] = useState({
    ...product.colorWithImage[0],
  });

  function handleColorMouseOver(obj, event) {
    setCurrentColorImage(obj);
    event.target.classList.add("colorHover");
  }

  function handleColorMouseLeave(event) {
    event.target.classList.remove("colorHover");
  }

  return (
    <div>
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
          {product?.colorWithImage.map((current) => {
            return (
              <div
                key={current.color}
                className={styles.colorBox}
                style={{ "--my-product-color": current.color }}
                onMouseOver={(event) => {
                  handleColorMouseOver(current, event);
                }}
                onMouseLeave={handleColorMouseLeave}  
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
  