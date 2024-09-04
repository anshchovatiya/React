import React, { useRef } from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./css/Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";
const Header = () => {
  let Header = useRef(null);

  let oldScroll = window.scrollY;
  window.onscroll = function (event) {

    if(window.scrollY < 400){
      Header.current.classList.remove("sticky");
    }
    else if (oldScroll < window.scrollY) {
      Header.current.classList.remove("sticky");
    } else {
      Header.current.classList.add("sticky");
    }

     oldScroll = window.scrollY;
  };
  


  return (
    <div className={styles.headerContainer} ref={Header}>
      <span className={styles.menuIcon}><CgMenuLeft /></span>
      <img src={logo} alt="Ecomous logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li className={styles.navOption}>
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
        <span><IoSearch /></span>
        <span className={styles.hider}><FiUser /></span>
        <span className={styles.hider}><LuHeart /></span>
        <span><PiShoppingCartBold /></span>
      </div>
    </div>
  );
};

export default Header;
