// https://themesflat.co/html/ecomus/index.html
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import HomePage from "./components/pages/HomePage";
import BottomNav from "./components/common/BottomNav";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {PageLayOut,HomeLayout} from "./components/layout/LayoutPaths";
import ShopPage from "./components/Pages/ShopPage";
import ProductPage from "./components/Pages/ProductPage";
import Introduction from "./components/Pages/Introduction";
import ContactUs from "./components/Pages/ContactUs";


let Layout = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children : [
          {
            path:"",
            element:<HomePage/>
          },
        ]
  },
  {
    path:"/home",
    element:<HomeLayout/>,
    children : [
          {
            path:"",
            element:<HomePage/>
          },
        ]
  },
  {
    path:"/shop",
    element:<PageLayOut/>,
    children : [
          {
            path:"",
            element:<ShopPage/>
          },
        ]
  },
  {
    path:"/product",
    element:<PageLayOut/>,
    children : [
          {
            path:"",
            element:<ProductPage/>
          },
        ]
  },
  {
    path:"/about",
    element:<PageLayOut/>,
    children : [
          {
            path:"",
            element:<Introduction/>
          },
        ]
  },
  {
    path:"/contact",
    element:<PageLayOut/>,
    children : [
          {
            path:"",
            element:<ContactUs/>
          },
        ]
  },


])


function App() {
  return (
    <>
      <RouterProvider router={Layout} />
    </>
  );
}

export default App;
