import React from 'react'
import BillingDetail from '../helpers/BillingDetail';
import YourOrder from '../helpers/YourOrder';

const CheckoutBox = () => {
  return (
    <div className="max-w-[1500px] mx-auto lg:px-12 px-[18px] overflow-x-hidden pt-9 pb-5 md:pt-16 lg:pt-20">
    <div className="grid lg:grid-cols-[65%_35%] gap-[2vw]">
        <BillingDetail/>
        <YourOrder/>
    </div>
  </div>
  )
}

export default CheckoutBox



 