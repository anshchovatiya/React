import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./css/Header.module.css";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { HeaderCategoriesData, HeaderNavImages, HeaderPagesDropDownData, HeaderProductDropDownData, HeaderShopDropDownData, ProductShowCaseSliderOne } from "../../data/constants";



import CatagoriesCard from "../helpers/CategoriesCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


import { NavLink } from "react-router-dom";
import { NavMainOptionsData } from "../../data/constants";
import MenubarIcon from "../helpers/MenubarIcon";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ProductDisplayCard from "../helpers/ProductDisplayCard";



const Header = () => {

  // track status of current drop-down
  let [currentDropDown, setCurrentDropDown] = useState(null);

  let Header = useRef(null);
  let timeout = useRef(null);
  let oldScroll = useRef(window.scrollY);

  // control sticky positioning of header
  useEffect(() => {
    function HeaderOnScroll() {
      if (window.scrollY < 68) {
        Header.current.classList.remove("sticky");
      } else if (oldScroll.current < window.scrollY) {
        Header.current.classList.remove("sticky");
      } else {
        Header.current.classList.add("sticky");
      }
      oldScroll.current = window.scrollY;
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

  // Hide the dropdown
  function handleNavItemClick() {
    setCurrentDropDown(null);
  }

  return (
    <div className={`${styles.headerContainer} w-screen`} ref={Header}>
      <MenubarIcon />
      <img src="/svg/logo.svg" alt="Ecomous logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        {NavMainOptionsData.map((currentNavItem, index) => {
          return (<li key={currentNavItem + index}
            className={styles.navOption}
            onMouseOver={() => handleNavMouseOver(currentNavItem.linkText)}
            onMouseLeave={handleNavMouseOut}
          >
            <a href="#">
              <span>{currentNavItem.name}</span>
              <IoIosArrowDown />
            </a>
          </li>);
        })}


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
              {
                HeaderPagesDropDownData.map((current, index) => {
                  if (current.arrow) {
                    return (<li key={index + current.text} className="*:flex *:justify-between ShopListItem"
                      onClick={handleNavItemClick}
                    >
                      <NavLink to={current.NavLink}>
                        <p>{current.text}</p>
                        <IoIosArrowForward />
                      </NavLink>
                    </li>)
                  }
                  else {
                    return (<li key={current.text + index} className="ShopListItem" onClick={handleNavItemClick}>
                      <NavLink to={current.NavLink}>{current.text}</NavLink>
                    </li>);
                  }
                })
              }
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
              <li className="ShopListItem">
                <NavLink to="/blog" onClick={handleNavItemClick}>
                  Grid Layout
                </NavLink>
              </li>
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
          <NavLink to="/account">
            <FiUser />
          </NavLink>
        </span>
        <span className={styles.hider}>
          <NavLink to="/wishlist">
            <LuHeart />
          </NavLink>
        </span>
        <span>
          <PiShoppingCartBold />
        </span>
      </div>


      {/* Home Button Drop Down */}
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
        <button className="flex items-center px-[30px] leading-[50px] bg-black text-white gap-2 rounded-[4px] m-auto mt-[1.5vw]">
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
              {
                HeaderShopDropDownData.map((currentSection) => {
                  return (
                    <div key={currentSection.tittle}>
                      <h3 className="ShopListTittle">{currentSection.tittle}</h3>
                      <ul>
                        {currentSection.linkData.map((currentLink) => {
                          return (<li key={currentLink.linkText}
                            className="ShopListItem"
                            onClick={() => setCurrentDropDown(null)}
                          >
                            <NavLink to={currentLink.link}>{currentLink.linkText}</NavLink>
                          </li>);
                        })}
                      </ul>
                    </div>);
                })
              }     
          </div>
          <div className="grid grid-cols-2 gap-8">
            {
              HeaderCategoriesData.map((currentCategories) => {
                return <CatagoriesCard key={currentCategories.category} image={currentCategories.image} Text={currentCategories.category} altText={currentCategories.alText} />
              })
            }
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
          {
                HeaderProductDropDownData.map((currentSection) => {
                  return (
                    <div key={currentSection.tittle}>
                      <h3 className="ShopListTittle">{currentSection.tittle}</h3>
                      <ul>
                        {currentSection.linkData.map((currentLink) => {
                          return (<li key={currentLink.linkText}
                            className="ShopListItem"
                            onClick={() => setCurrentDropDown(null)}
                          >
                            <NavLink to={currentLink.link}>{currentLink.linkText}</NavLink>
                          </li>);
                        })}
                      </ul>
                    </div>);
                })
              }    
        
  
          </div>
          <div>
            <h3 className="ShopListTittle">BEST SELLER</h3>
            <div className="grid grid-cols-1 gap-6">
            <Splide
                hasTrack={false}
                aria-label="..."
                options={{
                  perPage: 2,
                  perMove: 1,
                  gap: "20px",
                  dots: false,
                  pagination: false,
                  easing: "ease-in-out",
                  duration: "3s",
                }}
                className="group cursor-pointer"
              >
                <div className="custom-wrapper">
                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--next hover:bg-white !top-[calc(50%-50px)] !h-[50px] !w-[50px] !hidden group-hover:!flex">
                      <IoIosArrowForward />
                    </button>

                    <button className="splide__arrow splide__arrow--prev hover:bg-white !top-[calc(50%-50px)] !h-[50px] !w-[50px] !hidden !group-hover:block group-hover:!flex">
                      <IoIosArrowBack className="!rotate-[-deg] text-[16px]" />
                    </button>
                  </div>

                  <SplideTrack>
                    {ProductShowCaseSliderOne.map((currentProduct, index) => {
                      return (
                        <Fragment key={index}>
                          <SplideSlide>
                            <ProductDisplayCard product={currentProduct} />
                          </SplideSlide>
                        </Fragment>
                      );
                    })}
                  </SplideTrack>
                </div>
              </Splide>
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
      className={`hidden lg:block absolute top-full left-0 w-screen bg-white !z-[1000] min-1150:px-[60px]   py-[40px] ${isVisible ? "NavDropDownVisible" : "NavDropDownHidden"
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
      className={`absolute top-[54px] -translate-x-1/2 ml-8 bg-white w-[280px] h-fit z-[999] shadow-[0_4px_8px_rgb(235,235,235)] py-[24px] px-[20px] ${isVisible ? "NavDropDownDrawerVisible" : "NavDropDownDrawerHidden"
        } NavDropDrawer`}
    >
      {children}
    </div>
  );
}

