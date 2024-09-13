import { BsFire } from "react-icons/bs";
import PageHeader from "../helpers/PageHeader";
import img1 from "../../assets/images/white-2.jpg";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

let PRODUCTS = [
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
];

function SingleProduct({ product }) {
  let [qty, setQty] = useState(product.Quantity);

  function handlePlusQty() {
    if (qty < 50) {
      setQty((cur) => cur + 1);
    }
  }
  function handleMinusQty() {
    if (qty > 1) {
      setQty((cur) => cur - 1);
    }
  }
  return (
    <div className="flex md:grid grid-cols-[50%_1fr_1fr_1fr] py-[10px] md:py-[18px] pt-[20px]">
      <div className="flex flex-1 text-[12px]">
        <img
          src={product.image}
          alt="product image"
          className="w-20 max-md:mr-5 h-[111px]"
        />
        <div className="ml-4 max-md:hidden">
          <p className="text-[14px] font-semibold hover:text-[crimson] cursor-pointer">{product.product_name}</p>
          <p className="text-[12px] mt-1">
            {product.color} / {product.size}
          </p>
          <button className="text-[12px] border-b border-black font-medium leading-3 hover:text-[crimson] hover:border-[crimson] mt-1">
            Remove
          </button>
        </div>
        <div className="md:hidden flex-1 ">
          <p className="text-[14px] font-semibold hover:text-[crimson] cursor-pointer">{product.product_name}</p>
          <p className="mt-1">
            {product.color} / {product.size}
          </p>
          <button className="border-b border-black font-medium leading-3 hover:text-[crimson] hover:border-[crimson] mt-1">
            Remove
          </button>
          <div className="mt-2.5 font-semibold">
            <div className="flex justify-between py-2 border-t border-dashed">
              <p>Price</p>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-dashed">
              <p>Quantity</p>
              <div className="flex items-center justify-between bg-[rgb(229,231,235)] px-2 py-1.5 rounded-sm *:text-[12px] w-[86px]">
                <FaMinus onClick={handleMinusQty} />
                <span>{qty}</span>
                <FaPlus onClick={handlePlusQty} />
              </div>
            </div>
            <div className="flex justify-between py-2 border-t border-dashed">
              <p>Total</p>
              <p>${(product.price * qty).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="max-md:hidden text-[14px] my-auto font-medium text-center">
        &#x24;{(product.price).toFixed(2)}
      </p>
      <div className="max-md:hidden text-[14px] m-auto font-medium flex items-center justify-between  bg-[rgb(229,231,235)] px-2 py-1.5 rounded-sm *:text-[12px] w-[86px] ">
        <FaMinus onClick={handleMinusQty} />
        <span>{qty}</span>
        <FaPlus onClick={handlePlusQty} />
      </div>
      <p className="max-md:hidden text-[14px] my-auto font-bold text-center">
        &#x24;{(product.price * qty).toFixed(2)}
      </p>
    </div>
  );
}

function CartSection() {
  return (
    <div className=" max-w-[1500px] px-[18px] lg:px-12 m-auto pt-[35px] pb-[22px] md:pt-[68px] lg:pt-[80px]">
      <div className=" lg:flex justify-between items-center">
        <div className="flex items-center justify-center w-full gap-2.5 mb-[30px]">
          <BsFire className="FireAnimation text-[crimson] text-[17px] md:text-[20px]" />
          <p className="text-[14px] md:text-[20px] leading-[35px] text-center">
            These products are limited, checkout within
          </p>
          <span className="p-[3px] text-white bg-[#db1215] px-3 rounded-[20px] text-[16px] font-semibold max-md:hidden">
            10m:00s
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-[70%_30%] mt-[40px] lg:mt-[50px]">
        <div className="CartProducts border-b">
          <div className="hidden md:grid grid-cols-[50%_1fr_1fr_1fr] *:text-[16px] *:font-semibold border-b pb-4 text-center">
            <p className="text-left">Product</p>
            <p>Price</p>
            <p>Quality</p>
            <p>Total</p>
          </div>
          {PRODUCTS.map((currentProduct) => {
            return <SingleProduct product={currentProduct} />;
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

const ShopCart = () => {
  return (
    <div>
      <PageHeader tittle={"Shopping Cart"} />
      <CartSection />
    </div>
  );
};

export default ShopCart;
