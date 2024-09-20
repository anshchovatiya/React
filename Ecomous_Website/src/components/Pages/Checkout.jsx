import React, { useState } from "react";
import PageHeader from "../helpers/PageHeader";
import CheckoutBox from "../main/CheckoutBox";


const Checkout = () => {
  return (
    <>
      <PageHeader tittle="Check Out" />
      <CheckoutBox />
    </>
  );
};

export default Checkout;
