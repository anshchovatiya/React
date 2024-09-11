import Header from "../common/Header";
import TopBar from "../common/TopBar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
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
      </div>
    </>
  );
};

export { HomeLayout, PageLayOut };
