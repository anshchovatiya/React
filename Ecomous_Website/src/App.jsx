// https://themesflat.co/html/ecomus/index.html
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import HomePage from "./components/pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayOut, HomeLayout } from "./components/layout/LayoutPaths";
import ShopPage from "./components/Pages/ShopPage";
import ProductPage from "./components/Pages/ProductPage";
import Introduction from "./components/Pages/Introduction";
import ContactUs from "./components/Pages/ContactUs";
import FaqSection from "./components/Pages/FaqSection";
import ShopCart from "./components/Pages/ShopCart";
import Checkout from "./components/Pages/Checkout";
import BlogGrid from "./components/Pages/BlogGrid";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import WishList from "./components/Pages/WishList";
import ErrorPage from "./components/Pages/ErrorPage";
import { AccountDashboard } from "./components/helpers/AccountDashboard";
import AccountOrders from "./components/helpers/AccountOrders";
import AccountAddress from "./components/helpers/AccountAddress";
import AccountDetails from "./components/helpers/AccountDetails";
import AccountWhishList from "./components/helpers/AccountWhishlist";
import UserInfo from "./components/Pages/UserInfo";

let Layout = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        element: <Checkout />,
      },
      {
        path: "blog",
        element: <BlogGrid />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "account",
        element: <UserInfo />,
        children: [
          {
            index: true,
            element: <AccountDashboard />,
          },
          {
            path: "dashboard",
            element: <AccountDashboard />,
          },
          {
            path: "orders",
            element: <AccountOrders />,
          },
          {
            path: "address",
            element: <AccountAddress />,
          },
          {
            path: "details",
            element: <AccountDetails />,
          },
          {
            path: "wishlist",
            element: <AccountWhishList />,
          },
        ],
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
