import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./css/Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";

import { HeaderNavImages } from "../../data/images";
import CatagoriesCard from "../helpers/CatagoriesCard";
import { IoIosArrowForward } from "react-icons/io";

import productDemoImage1 from "../../assets/images/collection-17.jpg";
import productDemoImage2 from "../../assets/images/collection-14.jpg";
import ProductDisplayCard from "./ProductDisplayCard";

import img1 from "../../assets/images/black-1.jpg";
import img2 from "../../assets/images/orange-1.jpg";
import img3 from "../../assets/images/white-1.jpg";
import { NavLink } from "react-router-dom";

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

const Header = () => {
  let [currentDropDown, setCurrentDropDown] = useState(null);

  let Header = useRef(null);
  let timeout = useRef(null);
  let oldScroll = window.scrollY;

  useEffect(() => {
    function HeaderOnScroll(event) {
      if (window.scrollY < 0) {
        Header.current.classList.remove("sticky");
      } else if (oldScroll < window.scrollY) {
        Header.current.classList.remove("sticky");
      } else {
        Header.current.classList.add("sticky");
      }

      oldScroll = window.scrollY;
    }

    window.addEventListener("scroll", HeaderOnScroll);

    return () => {
      window.removeEventListener("scroll", HeaderOnScroll);
    };
  });

  // handle when mouse is on nav-text or nav content
  function handleNavMouseOver(cur) {
    clearTimeout(timeout.current);
    setCurrentDropDown(cur);
  }

  // handle when mouse leave nav-text or nav content
  function handleNavMouseOut() {
    timeout.current = setTimeout(() => {
      setCurrentDropDown(null);
    }, 500);
  }

  function handleNavItemClick() {
    setCurrentDropDown(null); // Hide the dropdown
  }


  return (
    <div className={`${styles.headerContainer} w-screen`} ref={Header}>
      <span className={styles.menuIcon}>
        <CgMenuLeft />
      </span>
      <img src={logo} alt="Ecomous logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li
          className={styles.navOption}
          onMouseOver={() => handleNavMouseOver("home")}
          onMouseLeave={handleNavMouseOut}
        >
          <a href="#">
            <span>Home</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li
          className={styles.navOption}
          onMouseOver={() => handleNavMouseOver("shop")}
          onMouseLeave={handleNavMouseOut}
        >
          <a href="#">
            <span>Shop</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li
          className={styles.navOption}
          onMouseOver={() => handleNavMouseOver("product")}
          onMouseLeave={handleNavMouseOut}
        >
          <a href="#">
            <span>Product</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li
          className={`${styles.navOption} relative`}
          onMouseOver={() => handleNavMouseOver("pages")}
          onMouseLeave={handleNavMouseOut}
        >
          <a href="#">
            <span>Pages</span>
            <IoIosArrowDown />
          </a>
          <NavBarDrawer isVisible={currentDropDown === "pages"}>
            <ul className={`*:text-nowrap`}>
              <li
                className="ShopListItem"
                onClick={handleNavItemClick}
              >
                <NavLink to={"/about"}>About us</NavLink>
              </li>
              <li className="flex items-center justify-between ShopListItem">
                <p>Brands</p>
                <IoIosArrowForward />
              </li>
              <li
                className="*:flex *:justify-between ShopListItem"
                onClick={handleNavItemClick}
              >
                <NavLink to={"/contact"}>
                  <p>Contact</p>
                  <IoIosArrowForward />
                </NavLink>
              </li>
              <li
                className="*:flex *:justify-between ShopListItem"
                onClick={handleNavItemClick}
              >
                <NavLink to={"/faq"}>
                  <p>FAQ</p>
                  <IoIosArrowForward />
                </NavLink>
              </li>
            
              <li className="flex items-center justify-between ShopListItem">
                <p>Store</p>
                <IoIosArrowForward />
              </li>
              <li className="ShopListItem">Timeline</li>
              <li className="ShopListItem">View Cart</li>
              <li className="ShopListItem">Check Out</li>
              <li className="flex items-center justify-between ShopListItem">
                <p>Payment</p>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center justify-between ShopListItem">
                <p>My account</p>
                <IoIosArrowForward />
              </li>
              <li className="ShopListItem">invoice</li>
            </ul>
          </NavBarDrawer>
        </li>
        <li
          className={styles.navOption}
          onMouseOver={() => handleNavMouseOver("blog")}
          onMouseLeave={handleNavMouseOut}
        >
          <a href="#">
            <span>Blog</span>
            <IoIosArrowDown />
          </a>
          <NavBarDrawer isVisible={currentDropDown === "blog"}>
            <ul className="*:text-nowrap">
              <li className="ShopListItem">Grid Layout</li>
              <li className="ShopListItem">Left Sidebar</li>
              <li className="ShopListItem">Right sidebar</li>
              <li className="ShopListItem">Blog list</li>
              <li className="ShopListItem">Single post</li>
            </ul>
          </NavBarDrawer>
        </li>
        <li className={styles.navOption}>
          <a href="#">
            <span>Buy now</span>
          </a>
        </li>
      </ul>
      <div className={styles.iconContainer}>
        <span>
          <IoSearch />
        </span>
        <span className={styles.hider}>
          <FiUser />
        </span>
        <span className={styles.hider}>
          <LuHeart />
        </span>
        <span>
          <PiShoppingCartBold />
        </span>
      </div>

      <DropDown
        isVisible={currentDropDown === "home"}
        handleNavMouseOver={() => handleNavMouseOver("home")}
        handleNavMouseOut={handleNavMouseOut}
      >
        <div className="grid grid-cols-3 min-1150:grid-cols-6 gap-x-[20px] gap-y-[25px] px-[50px] max-w-[1500px] m-auto">
          {HeaderNavImages.map((cur, index) => {
            return (
              <div
                key={index}
                className="border border-white px-[7px] py-[6px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-sm overflow-hidden hover:border-black cursor-pointer"
              >
                <NavLink to={"/home"}>
                  <img src={cur.image} alt="Demo web image"></img>
                </NavLink>
                <p className="leading-[45px] text-center text-nowrap text-[14px] font-medium">
                  {cur.name}
                </p>
              </div>
            );
          })}
        </div>
        <button className="flex items-center px-[30px] leading-[50px] bg-black text-white gap-2 rounded-[4px] m-auto mt-[40px]">
          <span>Shop collection</span>
          <span className="text-[18px]">
            <IoIosArrowForward />
          </span>
        </button>
      </DropDown>
      <DropDown
        isVisible={currentDropDown === "shop"}
        handleNavMouseOver={() => handleNavMouseOver("shop")}
        handleNavMouseOut={handleNavMouseOut}
      >
        <div className="grid grid-cols-2 py-[15px] px-[16px] max-w-[1500px] m-auto">
          <div className="grid grid-cols-3">
            <div>
              <h3 className="ShopListTittle">SHOP LAYOUT</h3>
              <ul>
                <li
                  className="ShopListItem"
                  onClick={() => setCurrentDropDown(null)}
                >
                  <NavLink to={"/shop"}>Default</NavLink>
                </li>
                <li className="ShopListItem">Left sidebar</li>
                <li className="ShopListItem">Right sidebar</li>
                <li className="ShopListItem">Full width</li>
                <li className="ShopListItem">Sub collection</li>
                <li className="ShopListItem">Collection list</li>
              </ul>
            </div>
            <div>
              <h3 className="ShopListTittle">DEFAULT</h3>
              <ul>
                <li className="ShopListItem">Pagination links</li>
                <li className="ShopListItem">Pagination load more</li>
                <li className="ShopListItem">Pagination infinite scrolling</li>
                <li className="ShopListItem">Filter Sidebar</li>
                <li className="ShopListItem">Filter hidden</li>
              </ul>
            </div>
            <div>
              <h3 className="ShopListTittle">PRODUCT STYLES</h3>
              <ul>
                <li className="ShopListItem">Product style list</li>
                <li className="ShopListItem">Product style 01</li>
                <li className="ShopListItem">Product style 02</li>
                <li className="ShopListItem">Product style 03</li>
                <li className="ShopListItem">Product style 04</li>
                <li className="ShopListItem">Product style 05</li>
                <li className="ShopListItem">Product style 06</li>
                <li className="ShopListItem">Product style 07</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <CatagoriesCard image={productDemoImage1} Text="Sunglasses" />
            <CatagoriesCard image={productDemoImage2} Text="Sunglasses" />
          </div>
        </div>
      </DropDown>
      <DropDown
        isVisible={currentDropDown === "product"}
        handleNavMouseOver={() => handleNavMouseOver("product")}
        handleNavMouseOut={handleNavMouseOut}
      >
        <div className="grid grid-cols-[66%_34%] py-[15px] px-[16px] gap-5 max-w-[1500px] m-auto">
          <div className="grid grid-cols-4 gap-3">
            <div>
              <h3 className="ShopListTittle">PRODUCT LAYOUT</h3>
              <ul>
                <li
                  className="ShopListItem"
                  onClick={() => setCurrentDropDown(null)}
                >
                  <NavLink to={"/product"}>Product Default</NavLink>
                </li>
                <li className="ShopListItem">Product grid 1</li>
                <li className="ShopListItem">Product grid 2</li>
                <li className="ShopListItem">Product stacked</li>
                <li className="ShopListItem">Product right thumbnails</li>
                <li className="ShopListItem">Product bottom thumbnails</li>
                <li className="ShopListItem">Product drawer sidebar</li>
                <li className="ShopListItem">Product description accordion</li>
                <li className="ShopListItem">Product description list</li>
                <li className="ShopListItem">Product description vertical</li>
              </ul>
            </div>
            <div>
              <h3 className="ShopListTittle">PRODUCT DETAILS</h3>
              <ul>
                <li className="ShopListItem">Product inner zoom</li>
                <li className="ShopListItem">Pagination zoom magnifier</li>
                <li className="ShopListItem">Pagination no zoom</li>
                <li className="ShopListItem">Product photoswipe popup</li>
                <li className="ShopListItem">
                  Product external zoom and photoswipe popup
                </li>
                <li className="ShopListItem">Product video</li>
                <li className="ShopListItem">Product 3D, AR models</li>
                <li className="ShopListItem">Product option & customizer</li>
                <li className="ShopListItem">Advanced product types</li>
                <li className="ShopListItem">
                  Recipient information form for gift card products
                </li>
              </ul>
            </div>
            <div>
              <h3 className="ShopListTittle">PRODUCT SWATCHES</h3>
              <ul>
                <li className="ShopListItem">Product color swatch</li>
                <li className="ShopListItem">Product rectangle</li>
                <li className="ShopListItem">Product rectangle color</li>
                <li className="ShopListItem">Product swatch image</li>
                <li className="ShopListItem">Product swatch dropdown</li>
                <li className="ShopListItem">Product swatch dropdown color</li>
              </ul>
            </div>
            <div>
              <h3 className="ShopListTittle">PRODUCT FEATURES</h3>
              <ul>
                <li className="ShopListItem">Frequently bought together</li>
                <li className="ShopListItem">Frequently bought together 2</li>
                <li className="ShopListItem">Product upsell features</li>
                <li className="ShopListItem">Product pre-orders</li>
                <li className="ShopListItem">Back in stock notification</li>
                <li className="ShopListItem">Product pickup</li>
                <li className="ShopListItem">Variant images grouped</li>
                <li className="ShopListItem">Complimentary products</li>
                <li className="ShopListItem">Quick order list</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="ShopListTittle">BEST SELLER</h3>
            <div className="flex gap-6">
              <ProductDisplayCard product={Product1} />
              <ProductDisplayCard product={Product1} />
            </div>
          </div>
        </div>
      </DropDown>
    </div>
  );
};

export default Header;

// home drop-down container with animation and positioning
function DropDown({
  isVisible,
  handleNavMouseOver,
  handleNavMouseOut,
  children,
}) {
  return (
    <div
      className={`hidden lg:block absolute top-full left-0 w-screen bg-white !z-[1000] min-1150:px-[60px]   py-[40px] ${
        isVisible ? "NavDropDownVisible" : "NavDropDownHidden"
      } NavDropDown`}
      onMouseOver={() => handleNavMouseOver("home")}
      onMouseLeave={handleNavMouseOut}
    >
      {children}
    </div>
  );
}

function NavBarDrawer({ isVisible, children }) {
  return (
    <div
      className={`absolute top-[54px] -translate-x-1/2 ml-8 bg-white w-[280px] h-fit z-[999] shadow-[0_4px_8px_rgb(235,235,235)] py-[24px] px-[20px] ${
        isVisible ? "NavDropDownDrawerVisible" : "NavDropDownDrawerHidden"
      } NavDropDrawer`}
    >
      {children}
    </div>
  );
}
