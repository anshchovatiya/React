import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart";



export default function SingleProduct({ product }) {
    let [qty, setQty] = useState(product.Qty);
    const dispatch = useDispatch();
  
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

    function handleRemoveFromCart(){
      dispatch(removeFromCart(product));
    }
    return (
      <div className="flex md:grid grid-cols-[50%_1fr_1fr_1fr] py-[10px] md:py-[18px] pt-[20px]">
        <div className="flex flex-1 text-[12px]">
          <img
            src={product?.colorWithImage[0]?.link}
            alt={product?.colorWithImage[0]?.altText}
            className="w-20 max-md:mr-5 h-[111px]"
          />
          <div className="ml-4 max-md:hidden">
            <p className="text-[14px] font-semibold hover:text-[crimson] cursor-pointer">
              {product.tittle}
            </p>
            <p className="text-[12px] mt-1">
              {product?.colorWithImage[0]?.color || "#CED4CA"} / {product.sizes && product?.sizes[0] || "M"}
            </p>
            <button className="text-[12px] border-b border-black font-medium leading-3 hover:text-[crimson] hover:border-[crimson] mt-1" onClick={handleRemoveFromCart}>
              Remove
            </button>
          </div>
          <div className="md:hidden flex-1 ">
            <p className="text-[14px] font-semibold hover:text-[crimson] cursor-pointer">
              {product.product_name}
            </p>
            <p className="mt-1">
              {product.colorWithImage[0].color} / {product.sizes[product.sizes.length-1]}
            </p>
            <button className="border-b border-black font-medium leading-3 hover:text-[crimson] hover:border-[crimson] mt-1">
              Remove
            </button>
            <div className="mt-2.5 font-semibold">
              <div className="flex justify-between py-2 border-t border-dashed">
                <p>Price</p>
                <p>${(+product?.price).toFixed(2)}</p>
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
                <p>${((+product.price )* qty).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="max-md:hidden text-[14px] my-auto font-medium text-center">
          &#x24;{(+product.price).toFixed(2)}
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