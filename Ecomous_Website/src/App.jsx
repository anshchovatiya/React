// https://themesflat.co/html/ecomus/index.html
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import HomePage from "./components/pages/HomePage";
import BottomNav from "./components/common/BottomNav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayOut, HomeLayout } from "./components/layout/LayoutPaths";
import ShopPage from "./components/Pages/ShopPage";
import ProductPage from "./components/Pages/ProductPage";
import Introduction from "./components/Pages/Introduction";
import ContactUs from "./components/Pages/ContactUs";
import FaqSection from "./components/Pages/FaqSection";
import ShopCart from "./components/Pages/ShopCart";
import Checkout from "./components/Pages/Checkout";

let Layout = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <PageLayOut />,
    children: [
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <Introduction />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "faq",
        element: <FaqSection />,
      },
      {
        path: "cart",
        element: <ShopCart />,
      },
      {
        path: "checkout",
        element: <Checkout/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Layout} />
    </>
  );
}

export default App;
