import React from "react";
import PageHeader from "../helpers/PageHeader";
import ProductDisplayCard from "../helpers/ProductDisplayCard";
import img1 from "../../assets/images/black-1.jpg";
import img2 from "../../assets/images/orange-1.jpg";
import img3 from "../../assets/images/white-1.jpg";

let Product = [
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    colorWithImage: [
      { color: "#ffa500", image: img2 },
      { color: "#000000", image: img1 },
      { color: "#ffffff", image: img3 },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    colorWithImage: [
      { color: "#ffa500", image: img2 },
      { color: "#000000", image: img1 },
      { color: "#ffffff", image: img3 },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    colorWithImage: [
      { color: "#ffa500", image: img2 },
      { color: "#000000", image: img1 },
      { color: "#ffffff", image: img3 },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    colorWithImage: [
      { color: "#ffa500", image: img2 },
      { color: "#000000", image: img1 },
      { color: "#ffffff", image: img3 },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    colorWithImage: [
      { color: "#ffa500", image: img2 },
      { color: "#000000", image: img1 },
      { color: "#ffffff", image: img3 },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
];

const WishList = () => {
  return (
    <div>
      <PageHeader tittle="Your Wishlist" />
      <div className="max-w-[1500px] m-auto lg:px-12 px-[18px] overflow-x-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 md:my-11">
        {/* {Product.map((current, index) => {
          return <ProductDisplayCard product={current} key={current + index} />;
        })} */}
      </div>
    </div>
  );
};

export default WishList;
