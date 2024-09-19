import ZoomSection from "../main/ZoomSection";
import InfoBox from "../helpers/InfoBox";
import CardShowCaseSlider from "../helpers/CardShowCaseSlider";
import img1 from "../../assets/images/black-1.jpg";
import img2 from "../../assets/images/orange-1.jpg";
import img3 from "../../assets/images/white-1.jpg";

let Product = {
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

const ProductPage = () => {
  return (
    <div className="max-w-[1440px] m-auto overflow-x-hidden">
      <ZoomSection />
      <InfoBox />
      {/* <CardShowCaseSlider tittle="People Also Bought" products={Product} className="my-[15px] md:mt-[40px]"/>
      <CardShowCaseSlider tittle="Recently Viewed" products={Product} className="my-[15px] md:mt-[40px]"/> */}
    </div>
  );
};

export default ProductPage;
