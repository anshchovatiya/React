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
        <Header/>

      <Outlet />
      <Footer />
    </>
  );
};

export { HomeLayout, PageLayOut };
