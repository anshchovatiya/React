import React from 'react'
import AboutUsHeroSection from '../main/AboutUsHeroSection'
import EcomusIntro from '../main/EcomusIntro'

const Introduction = () => {
    return (
        <>
            <AboutUsHeroSection />
            <div className='max-w-[1500px] px-[15px] md:px-[48px] m-auto'>
                <EcomusIntro />
            </div>
        </>
    )
}

export default Introduction