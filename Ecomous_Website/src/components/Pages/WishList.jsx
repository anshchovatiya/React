import React, { Fragment } from "react";
import PageHeader from "../helpers/PageHeader";
import { useSelector } from "react-redux";
import ProductDisplayCard from "../helpers/ProductDisplayCard";
import { NavLink } from "react-router-dom";
const WishList = () => {
  const MainWhishList = useSelector((state) => state.wishlist);
  console.log(MainWhishList);
  return (
    <div className="min-h-[500px]">
      <PageHeader tittle="Your Wishlist" />
      {MainWhishList.length > 0 ? (
        <div className="max-w-[1500px] m-auto lg:px-12 px-[18px] overflow-x-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 md:my-11">
          {MainWhishList.map((current, index) => {
            return (
              <ProductDisplayCard product={current} key={current + index} />
            );
          })}
        </div>
      ) : (
        <div className="max-w-[1500px] m-auto lg:px-12 px-[18px] overflow-x-hidden my-8 md:my-11 flex flex-col gap-5 justify-center items-center min-h-[400px]">
          <p className="max-w-[500px] text-center text-sm font-semibold">
            Your wishlist is empty! Create your dream list today by saving your
            favorite items for easy access later. It’s the perfect way to plan
            your next purchase or keep track of must-haves. Start adding now and
            never miss out!
          </p>
          <div className="flex  gap-4 *:rounded">
            {[
              {
                path: "/",
                text: "Back To Home",
              },
              {
                path: "/",
                text: "Explore",
              },
            ].map((currentButton) => {
              return (
                <Fragment key={currentButton.text}>
                  <NavLink to={currentButton.path}>
                    <button className="text-sm py-2 px-12 border border-black text-black hover:text-white hover:bg-black duration-500 font-semibold rounded">
                      {currentButton.text}
                    </button>
                  </NavLink>
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
