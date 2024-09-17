import ProductDisplayCard from "./ProductDisplayCard";
import img1 from "../../assets/images/black-1.jpg";
import img2 from "../../assets/images/orange-1.jpg";
import img3 from "../../assets/images/white-1.jpg";

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

export default function AccountWhishList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-lg:mt-7">
      <ProductDisplayCard product={Product1} />
      <ProductDisplayCard product={Product1} />
      <ProductDisplayCard product={Product1} />
    </div>
  );
}
