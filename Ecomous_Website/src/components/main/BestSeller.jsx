import ProductDisplayCard from "../helpers/ProductDisplayCard";
import styles from "./css/BestSeller.module.css";
import img1 from "../../assets/images/black-1.jpg";
import img2 from "../../assets/images/orange-1.jpg";
import img3 from "../../assets/images/white-1.jpg";
import SectionHead from "../helpers/SectionHead";

const BestSeller = () => {
  
  let Product1 = {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    colorWithImage: [
      { color: "#ffa500", image: img2 },
      { color: "#000000", image: img1 },
      { color: "#ffffff", image: img3 },
    ],
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <div className={`${styles.BestSellerContainer} overflow-x-hidden`}>
      <SectionHead
        tittle="Best Seller"
        description="Shop the Latest Styles: Stay ahead of the curve with our newest arrivals"
      />
      <section className={styles.ProductGrid}>
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
      </section>

    <div className={styles.TopSellerButton}>
      <button>Load more</button>
    </div>
    </div>
  );
};

export default BestSeller;
