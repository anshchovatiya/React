import React from "react";
import logo from "../../assets/images/logo.svg";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import FooterAccording from "../helpers/FooterAccording";
import FooterBottom from "../helpers/FooterBottom";
import { CurrencySelector, LanguageButton } from "../helpers/LanguageButton";

const Footer = () => {
  return (
    <div className=" max-w-[1500px] m-auto lg:px-12 px-[18px] overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-[18px]  py-[40px] border border-l-0 border-r-0 mt-7 *:text-[14px]">
        <div className="*:leading-[30px]">
          <img src={logo} alt="logo" className="mb-4" />
          <p>
            Address : 1234 Fashion Street, Suite 567,
            <br /> New York, NY 10001.
          </p>
          <p>Email : info@fashionshop.com</p>
          <p>Phone: (212) 555-1234</p>
          <div className="border-b border-black w-fit group hover:border-[crimson] mb-7">
            <a href="" className="flex items-center gap-2">
              <div className="font-medium group-hover:text-[crimson]">
                Get Direction
              </div>
              <FiArrowUpRight className="group-hover:text-[crimson]" />
            </a>
          </div>

          <div className="flex gap-2  *:p-[10px] *:outline *:outline-1  *:outline-black *:rounded-full *:flex *:items-center *:justify-center *:hover:cursor-pointer mb-[15px]">
            <a className="hover:bg-[#2b4170] hover:text-white  hover:outline-0">
              <FaFacebookF />
            </a>
            <a className="hover:bg-[#212529] hover:text-white   hover:outline-0">
              <BsTwitterX />
            </a>
            <a className="instagramGradient  hover:outline-0">
              <FaInstagram />
            </a>
            <a className="hover:text-white hover:bg-black  hover:outline-0">
              <FaTiktok />
            </a>
            <a className="hover:text-white hover:bg-[#e60023]  hover:outline-0">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <h4 className="text-[18px] font-medium mb-[25px]">Help</h4>
          <ul className="leading-[30px] *:font-medium">
            <li>
              <a className="hover:text-[crimson]" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Returns + Exchanges
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Shipping
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                FAQ’s
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Compare
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                My Wishlist
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h4 className="text-[18px] font-medium mb-[25px]">About Us</h4>
          <ul className="leading-[30px] *:font-medium">
            <li>
              <a className="hover:text-[crimson]" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Shipping
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Visit Our Store
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-[crimson]" href="#">
                Account
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <p className="mb-[25px] text-[18px] font-medium">Sign Up for Email</p>
          <p className="leading-[30px]">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          <form className="border grid grid-cols-2 rounded-[2px] mt-[27px] mb-[18px] text-[14px] font-normal  py-2  pl-[18px] pr-2 gap-2  overflow-hidden text-ellipsis">
            <input
              placeholder="Enter your email"
              type="email"
              name="UserEmail"
              className=" my-[8px] inline-block focus:outline-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-[1vw] text-[clamp(11px,1vw,0.9rem)] bg-black text-white rounded-[3px] w-fit"
              >
                <p className="inline">Subscribe</p>
                <FiArrowUpRight className="text-[18px] inline-block ml-1" />
              </button>
            </div>
          </form>
          <div className="flex">
            <CurrencySelector />
            <LanguageButton />
          </div>
        </div>
        <FooterAccording />
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
