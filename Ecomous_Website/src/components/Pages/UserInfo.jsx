import React from "react";
import PageHeader from "../helpers/PageHeader";
import { NavLink, Outlet } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className=" overflow-x-hidden">
      <PageHeader tittle="My Account" />
      <div className=" max-w-[1500px] pt-10 md:pt-14 pb-6 m-auto lg:px-12 px-[18px] grid lg:grid-cols-[25%_75%] gap-[2vw] max-md:gap-5">
        <div className="grid  gap-3 *:px-5 *:py-4 *:border *:rounded *:font-semibold h-fit">
          {[
            { name: "Dashboard", path: "/account/dashboard" },
            { name: "Orders", path: "/account/orders" },
            { name: "Address", path: "/account/address" },
            { name: "Account Details", path: "/account/details" },
            { name: "Wishlist", path: "/account/wishlist" },
            { name: "Logout", path: "/login" },
          ].map((current) => {
            return (
              <NavLink
                to={current.path}
                className={({ isActive }) => {
                  return isActive && "text-[crimson] bg-[#F0F0F0]";
                }}
              >
                {current.name}
              </NavLink>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserInfo;
