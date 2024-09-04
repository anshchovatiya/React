import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";

const BottomNav = () => {
  return (
    <div className="BottomNav grid grid-cols-5 fixed w-full bottom-0 place-items-center bg-white py-3 md:hidden">
      <div className="grid gap-[9px]">
        <div className="flex justify-center">
          <FaShop />
        </div>
        <div className="text-[12px]">Shop</div>
      </div>

      <div className="grid gap-[9px] ">
        <div className="flex justify-center">
          <GrSearch />
        </div>
        <div className="text-[12px]">Search</div>
      </div>
      <div className="grid gap-[9px]">
        <div className="flex justify-center">
          {" "}
          <FaRegUser />
        </div>
        <div className="text-[12px]">Account</div>
      </div>
      <div className="grid gap-[9px]">
        <div className="flex justify-center">
          {" "}
          <FiHeart />
        </div>
        <div className="text-[12px]">Wishlist</div>
      </div>
      <div className="grid gap-[9px]">
        <div className="flex justify-center">
          {" "}
          <BsCart3 />
        </div>
        <div className="text-[12px]">Cart</div>
      </div>
    </div>
  );
};

export default BottomNav;
