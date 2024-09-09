/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Background from "../../assets/images/about-banner-01.jpg"


const AboutUsHeroSection = () => {
  return (
    <div className='relative'>
        <img src={Background} alt="About us Background" className='min-h-[500px] object-cover w-full' />
        <p className='absolute z-50 top-0 h-full w-full flex justify-center items-center text-white text-center text-[24px] px-7 md:text-[50px] lg:text-[68px] md:text-nowrap'>Empowering women to achieve
            <br className='hidden md:block'/>
             fitness goals with style
        </p>
    </div>
  )
}

export default AboutUsHeroSection