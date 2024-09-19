import styles from "./css/BestSeller.module.css";

import {ProductDisplayCard, SectionHead} from "../../data/imports.jsx";
import { BestSellerProductData } from "../../data/constants";

const BestSeller = () => {
  return (
    <div className={`${styles.BestSellerContainer} overflow-x-hidden`}>
      <SectionHead
        tittle="Best Seller"
        description="Shop the Latest Styles: Stay ahead of the curve with our newest arrivals"
      />
      <section className={styles.ProductGrid}>
        {BestSellerProductData.map((currentProduct) => {
          return (
            <ProductDisplayCard
              key={currentProduct.id}
              product={currentProduct}
            />
          );
        })}
      </section>

      <div className={styles.TopSellerButton}>
        <button>Load more</button>
      </div>
    </div>
  );
};

export default BestSeller;
