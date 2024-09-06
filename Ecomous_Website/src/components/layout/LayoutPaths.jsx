import Header from "../common/Header";
import TopBar from "../common/TopBar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer/>
    </>
  );
};

const PageLayOut = () => {
  return (
    <>
      <div className="relative bg-white *:!relative">
        <Header />
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};

export { HomeLayout, PageLayOut };
