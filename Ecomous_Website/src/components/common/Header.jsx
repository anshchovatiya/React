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
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  
  let [curNav,setCurrentNav] = useState(null);
  let Header = useRef(null);

  let timeout = useRef(null);

  let oldScroll = window.scrollY;
  window.onscroll = function (event) {
    if (window.scrollY < 400) {
      Header.current.classList.remove("sticky");
    } else if (oldScroll < window.scrollY) {
      Header.current.classList.remove("sticky");
    } else {
      Header.current.classList.add("sticky");
    }

    oldScroll = window.scrollY;
  };


  function handleNavMouseOver(cur){
    if(timeout.current){
      clearTimeout(timeout.current);
    }
    setCurrentNav(cur);
  }
  function handleNavMouseOut(){
    timeout.current = setTimeout(()=>{
      setCurrentNav(null)
    },500);
  }


  return (
    <div
      className={`${styles.headerContainer} w-screen overflow-x-hidden`}
      ref={Header}
    >
      <span className={styles.menuIcon}>
        <CgMenuLeft />
      </span>
      <img src={logo} alt="Ecomous logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li className={styles.navOption} onMouseOver={()=>handleNavMouseOver("home")} onMouseLeave={handleNavMouseOut}>
          <a href="#">
            <span>Home</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li className={styles.navOption}>
          <a href="#">
            <span>Shop</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li className={styles.navOption}>
          <a href="#">
            <span>Product</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li className={styles.navOption}>
          <a href="#">
            <span>Pages</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li className={styles.navOption}>
          <a href="#">
            <span>Blog</span>
            <IoIosArrowDown />
          </a>
        </li>
        <li className={styles.navOption}>
          <a href="#">
            <span>Buy now</span>
            <IoIosArrowDown />
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

      {curNav === "home" && <HomeDropDown handleNavMouseOver={handleNavMouseOver} handleNavMouseOut={handleNavMouseOut}/>}
    </div>
  );
};

export default Header;

function HomeDropDown({handleNavMouseOver,handleNavMouseOut}) {


  return (
    <div onMouseEnter={()=>handleNavMouseOver("home")} onMouseLeave={()=>handleNavMouseOut()} className="hidden lg:block absolute top-full left-0 w-screen bg-white z-[1000] min-1150:px-[140px] py-[40px] NavDropDown">
      <div className="grid grid-cols-3 min-1150:grid-cols-6 gap-x-[20px] gap-y-[25px] px-[50px]">
        {HeaderNavImages.map((cur,index) => {
          return (
            <div className="border border-white px-[7px] py-[6px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-sm overflow-hidden hover:border-black cursor-pointer">
              <img src={cur.image} alt="Demo web image"></img>
              <p className="leading-[45px] text-center text-nowrap text-[14px] font-medium">{cur.name}</p>
            </div>
          );
        })}
      </div>
      <button className="flex items-center px-[30px] leading-[50px] bg-black text-white gap-2 rounded-[4px] m-auto mt-[48px]">
        <span>Shop collection</span>
        <span className="text-[18px]">
          <FaAngleRight />
        </span>
      </button>
    </div>
  );
}
