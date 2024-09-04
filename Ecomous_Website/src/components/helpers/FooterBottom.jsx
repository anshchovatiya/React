import React from 'react'
import img1 from "../../assets/images/img-1.png"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"
import img4 from "../../assets/images/img-4.png"
import img5 from "../../assets/images/visa.png"

const FooterBottom = () => {
  return (
    <div className='flex max-md:flex-col max-md:text-center justify-between w-full py-5  px-[18px] gap-[20px] max-md:pb-28'>
      <p>© 2024 Ecomus Store. All Rights Reserved</p>
      <div className='flex max-md:justify-center gap-[0.8vw]'>
        <img src={img5} alt="Payment Method logo" />
        <img src={img1} alt="Payment Method logo" />
        <img src={img2} alt="Payment Method logo" />
        <img src={img3} alt="Payment Method logo" />
        <img src={img4} alt="Payment Method logo" />
      </div>
    </div>
  )
}

export default FooterBottom
