import React from 'react'
import img from "../../assets/images/page-header-background.png"

const PageHeader = ({tittle, description}) => {
  return (
    <div className='py-[50px] md:py-[69px] text-center relative text-black'>
        <p className='text-[22px] md:text-[32px] lg:text-[42px] font-medium tracking-wide'>{tittle}</p>
        <p className='mt-1 text-[16px] font-normal'>{description}</p>
        <img src={img} alt="background" className='absolute h-full w-full top-0 object-cover' />
    </div>
  )
}

export default PageHeader;