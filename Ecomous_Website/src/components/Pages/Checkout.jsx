import React, { useState } from "react";
import PageHeader from "../helpers/PageHeader";
import img1 from "../../assets/images/hmgoepprod-5.jpg";
import CheckoutBox from "../main/CheckoutBox";


let PRODUCTS = [
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
  {
    image: img1,
    product_name: "Oversized Printed T-shirt",
    color: "White",
    size: "M",
    price: 18.0,
    Quantity: 1,
  },
];

const Checkout = () => {
  return (
    <>
      <PageHeader tittle="Check Out" />
      <CheckoutBox />
    </>
  );
};

export default Checkout;
