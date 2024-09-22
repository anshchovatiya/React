import { useSelector } from "react-redux";
import ProductDisplayCard from "./ProductDisplayCard";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function AccountWhishList() {
  let wishlist = useSelector((state) => state.wishlist);

  return (
    <>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-lg:mt-7">
          {wishlist.map((currentProduct) => {
            return <ProductDisplayCard product={currentProduct} key={currentProduct.id} />;
          })}
        </div>
      ) : (
        <div className=" m-auto lg:px-12 px-[18px] overflow-x-hidden my-8 md:my-11 flex flex-col gap-5 justify-center items-center min-h-[200px] md:min-h-[400px]">
          <p className="max-w-[500px] text-center text-sm font-semibold">
            Your wishlist is empty! Create your dream list today by saving your
            favorite items for easy access later. It’s the perfect way to plan
            your next purchase or keep track of must-haves. Start adding now and
            never miss out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center  gap-4 *:rounded">
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
    </>
  );
}
