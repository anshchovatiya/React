import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import img1 from "../../assets/images/hmgoepprod-5.jpg";

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
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
];

function CheckboxSvg() {
  let [check, setCheck] = useState(false);
  return (
    <div
      class="inline-flex items-center"
      onClick={() => setCheck((check) => !check)}
    >
      <label class="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          checked={check}
          class="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[crimson] checked:border-[crimson] duration-200"
          id="check"
        />
        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
}

const YourOrder = () => {
  return (
    <div>
      <h5 className="text-lg md:text-2xl font-medium max-lg:pt-5">
        Your order
      </h5>
      <div className="bg-[rgb(245,245,245)] py-7 mt-7 px-[15px] rounded md:p-8 text-sm">
        <div className="grid gap-5 max-h-[340px] overflow-y-auto !p-3 BillingDetails">
          {PRODUCTS.map((currentProduct) => {
            return (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white relative">
                    <img
                      src={currentProduct.image}
                      alt="product image"
                      className="object-contain h-full w-full"
                    />
                    <div
                      className="absolute -top-2 -right-2 bg-[rgb(102,102,102)] h-5 w-5 grid place-items-center rounded-full text-xs text-white
                  "
                    >
                      {currentProduct.Quantity}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{currentProduct.product_name}</p>
                    <p className="text-xs font-normal">
                      {currentProduct.color}/{currentProduct.size}
                    </p>
                  </div>
                </div>
                <p className="mb-2 font-medium">${currentProduct.price}</p>
              </div>
            );
          })}
        </div>
        <form className="flex mt-5 gap-3">
          <input
            type="text"
            className="flex-1 focus:outline-none py-3.5 border px-5 rounded"
            placeholder="Discount Code"
          />
          <button className="bg-black text-white px-5 rounded text-sm font-semibold">
            Apply
          </button>
        </form>
        <div className="text-xl flex justify-between font-medium my-5 px-1 border-b pb-4">
          <p>Total</p>
          <p>$18.00 USD</p>
        </div>
        <div>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="text-[crimson]"
              />
              <Label htmlFor="option-one">Direct bank transfer</Label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <RadioGroupItem
                value="option-two"
                id="option-two"
                className="text-[crimson]"
              />
              <Label htmlFor="option-two">Cash on delivery</Label>
            </div>
          </RadioGroup>
          <p className="my-5 text-sm text-gray-500">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <span className="underline">privacy policy</span>.
          </p>
          <div class="inline-flex items-center gap-3 mb-5">
            <CheckboxSvg />
            <p>
              I have read and agree to the website{" "}
              <span className="underline">terms and conditions.</span>
            </p>
          </div>
          <button className="w-full bg-black text-white py-3 rounded">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
