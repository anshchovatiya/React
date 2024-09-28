import { RiTruckLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import * as Accordion from "@radix-ui/react-accordion";
import { PaymentMethodIcons } from "../helpers/FooterBottom";
import SingleProduct from "../helpers/CartSingleProduct";
import { BsFire } from "react-icons/bs";
import img1 from "../../assets/images/white-2.jpg";
import DeliveryProgressBar from "../helpers/DeliveryProgressBar";
import { useSelector } from "react-redux";


export default function CartMainSection() {

  let cartItems = useSelector((state)=>state.cart);

  return (
    <div className=" max-w-[1500px] px-[18px] lg:px-12 m-auto pt-[35px] pb-[22px] md:pt-[68px] lg:pt-[80px] overflow-x-hidden">
      <div className=" lg:flex justify-between items-center">
        <div className="flex items-center justify-center w-full gap-2.5 mb-[30px] h-5">
          <BsFire className="FireAnimation text-[crimson] text-[15px] md:text-[20px] mb-0.5 " />
          <p className="text-[14px] md:text-[20px] leading-[35px] text-center">
            These products are limited, checkout within
          </p>
          <span className="p-[3px] text-white bg-[#db1215] px-3 rounded-[20px] text-[16px] font-semibold max-md:hidden">
            10m:00s
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-[65%_35%] gap-[3vw] mt-[40px] lg:mt-[50px]">
        <div>
          <div className="border-b">
            <div className="hidden md:grid grid-cols-[50%_1fr_1fr_1fr] w-full *:text-[16px] *:font-semibold border-b pb-4 text-center">
              <p className="text-left">Product</p>
              <p>Price</p>
              <p>Quality</p>
              <p>Total</p>
            </div>
            {cartItems.map((currentProduct,index) => {
              return <SingleProduct key={index} product={currentProduct} />;
            })}
          </div>
          <div>
            <p className="my-6 text-sm font-semibold">Add Order Note</p>
            <textarea
              name="order-note"
              id="order-note"
              className="border px-5 py-3 resize-none text-sm placeholder:text-sm focus:outline-none rounded-sm w-full max-w-[460px] font-medium"
              rows={5}
              placeholder="How can we help you?"
            ></textarea>
          </div>
        </div>

        <div>
          <DeliveryProgressBar progress={45} />
          <form className="bg-[#f2f2f2] px-4 md:px-8 py-6 mt-6 rounded">
            <Accordion.Root className="AccordionRoot" type="single" collapsible>
              <Accordion.Item className="AccordionItem" value="item-1">
                <Accordion.AccordionHeader>
                  <Accordion.AccordionTrigger className="Trigger  font-medium text-sm md:text-[18px] flex items-center justify-between w-full border-b pb-3">
                    Estimate Shipping
                    <GoPlus className="text-[22px] text-gray-500 Plus" />
                  </Accordion.AccordionTrigger>
                </Accordion.AccordionHeader>
                <Accordion.AccordionContent className="AccordionContent">
                  <form className="py-3 flex flex-col gap-5">
                    <div>
                      <label htmlFor="country" className="text-sm font-medium">
                        Country
                      </label>
                      <div className="bg-white  mt-2 px-2">
                        <select
                          name="country"
                          id="country"
                          className="focus:outline-none p-3 w-[99%] CountrySelector"
                        >
                          {[
                            "Australia",
                            "Belgium",
                            "Canada",
                            "France",
                            "Germany",
                            "Hong Kong",
                            "Israel",
                            "Italy",
                            "Japan",
                            "New Zealand",
                            "Norway",
                            "Singapore",
                            "South Korea",
                            "Spain",
                            "Switzerland",
                            "United Arab Emirates",
                            "United Kingdom",
                            "United States",
                            "Vietnam",
                            "Malaysia",
                            "Poland",
                            "India",
                          ]
                            .sort()
                            .map((country) => (
                              <option
                                value={country}
                                selected={country === "India" ? true : false}
                              >
                                {country}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="ZipCode" className="text-sm font-medium">
                        Zip Code
                      </label>
                      <input
                        type="number"
                        name="zip-code"
                        id="ZipCode"
                        className="focus:outline-none p-3"
                        placeholder="ex. 300 984"
                        min="0"
                      />
                    </div>
                    <button className="py-3 rounded mt-2 bg-black max-w-[200px] text-white text-sm font-semibold">
                      Estimate
                    </button>
                  </form>
                </Accordion.AccordionContent>
              </Accordion.Item>
            </Accordion.Root>
            <div className="mt-3 flex gap-3 items-center">
              <div>
                <input id="checkbox-default" type="checkbox" />
              </div>
              <label className="text-sm">
                Do you want a gift wrap? Only{" "}
                <b className="font-medium">$5.00</b>
              </label>
            </div>
            <div className="text-xl flex justify-between my-3">
              <p>Subtotal</p>
              <p className="font-semibold">$18.00 USD</p>
            </div>
            <p>
              Taxes and <span className="border-b border-black">shipping</span>{" "}
              calculated at checkout
            </p>
            <div className="mt-3 flex gap-3 items-center">
              <div>
                <input id="checkbox-default" type="checkbox" />
              </div>
              <label className="text-sm">
                I agree with the{" "}
                <a href="#" className="underline font-semibold">
                  terms and conditions
                </a>
              </label>
            </div>
            <button className="mt-4 text-sm py-3 bg-black text-white w-full rounded">
              Check out
            </button>
            <div className="text-center text-sm font-semibold mt-4">
              <p>Guarantee Safe Checkout</p>
              <div className="flex gap-2 mt-2 *:cursor-pointer *:w-9 justify-center">
                <PaymentMethodIcons />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
