import Header from "../main/Header";
import Footer from "../main/Footer";
import { Outlet } from "react-router-dom";
import BottomNav from "../main/BottomNav";

import { TopBar } from "../../data/components";

const HomeLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
      <BottomNav />
    </>
  );
};

const PageLayOut = () => {
  return (
    <>
      <div className="absolute top-0 z-[999]">
        <Header />
      </div>
      <div className="mt-[55px] md:mt-[84px]">
        <Outlet />
        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export { HomeLayout, PageLayOut };
