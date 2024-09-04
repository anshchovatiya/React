import * as Accordion from "@radix-ui/react-accordion";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import {LanguageButton} from "./LanguageButton";

const FooterAccording = () => {
  return (
    <Accordion.Root
      className="AccordionRoot md:hidden"
      type="single"
      collapsible
    >
      <Accordion.Item
        className="AccordionItem mt-[30px] mb-[15px]"
        value="item-1"
      >
        <Accordion.AccordionHeader>
          <Accordion.AccordionTrigger className="Trigger  font-medium text-[18px] flex items-center justify-between w-full">
            Help
            <GoPlus className="text-[22px] text-gray-500 Plus" />
          </Accordion.AccordionTrigger>
        </Accordion.AccordionHeader>
        <Accordion.AccordionContent className="AccordionContent">
          <ul className="leading-[30px] mt-3">
            <li>
              <a href="" className="hover:text-[crimson]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Returns + Exchanges
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Shipping
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                FAQ’s
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Compare
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                My Wishlist
              </a>
            </li>
          </ul>
        </Accordion.AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem my-[15px]" value="item-2">
        <Accordion.AccordionHeader>
          <Accordion.AccordionTrigger className="Trigger font-medium text-[18px] flex items-center justify-between w-full">
            About us
            <GoPlus className="text-[22px] text-gray-500" />
          </Accordion.AccordionTrigger>
        </Accordion.AccordionHeader>
        <Accordion.AccordionContent className="AccordionContent">
          <ul className="leading-[30px] mt-3">
            <li>
              <a href="" className="hover:text-[crimson]">
                Our Story
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Visit Our Store
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[crimson]">
                Account
              </a>
            </li>
          </ul>
        </Accordion.AccordionContent>
      </Accordion.Item>

      <Accordion.Item
        className="AccordionItem  mt-[15px] mb-[30px]"
        value="item-3"
      >
        <Accordion.AccordionHeader>
          <Accordion.AccordionTrigger className="Trigger font-medium text-[18px] flex items-center justify-between w-full">
            Sign Up for Email
            <GoPlus className="text-[22px] text-gray-500" />
          </Accordion.AccordionTrigger>
        </Accordion.AccordionHeader>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            <p className="leading-[30px] text-[14px] pt-4 pb-8">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>
            <form className="border grid grid-cols-2 rounded-[2px] text-[14px] mb-[40px] font-normal  py-2  pl-[18px] pr-2 gap-2">
              <input
                type="email"
                name="UserEmail"
                placeholder="Enter your email..."
                className=" my-[8px] inline-block focus:outline-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center px-5 bg-black text-white rounded-[3px] w-fit"
                >
                  <p className="inline">Subscribe</p>
                  <FiArrowUpRight className="text-[18px] inline-block ml-1" />
                </button>
              </div>
            </form>
            <div>
              <LanguageButton />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default FooterAccording;
