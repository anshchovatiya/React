import React from 'react'
import Intro1 from "../../assets/images/collection-69.jpg"
import Intro2 from "../../assets/images/collection-70.jpg"
import Intro3 from "../../assets/images/collection-71.jpg"
const EcomusIntro = () => {
    return (
        <div>

            <div className='my-[65px] text-center'>
                <h3 className='text-[22px] md:text-[32px] lg:text-[42px]'>We are Ecomous</h3>
                <p>Welcome to our classic women's clothing store, where we believe
                    that timeless style never goes out of fashion. Our collection features classic
                    pieces that are both stylish and versatile, perfect for building a
                    wardrobe that will last for years.</p>
            </div>
            <div className='flex'>
                <img src={Intro1} alt="Establised" />
                <div>
                    <h3>Established - 1995</h3>
                    <p>Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
                        passion for timeless style. Jane had always been drawn to classic
                        pieces that could be worn season after season, and she believed that
                        there was a gap in the market for a store that focused solely on classic
                        women's clothing. She opened the first store in a small town in New
                        England, where it quickly became a local favorite.</p>
                </div>
            </div>
            <div className='flex'>
            
                <div>
                    <h3>Our mission</h3>
                    <p>Our mission is to empower people through sustainable fashion.
                        We want everyone to look and feel good, while also doing our part to
                        help the environment.We believe that fashion should be stylish,
                        affordable and accessible to everyone. Body positivity and inclusivity
                        are values that are at the heart of our brand.</p>
                </div>
                <div>
                    <img src={Intro2} alt="Establised" />
                    <img src={Intro3} alt="Establised" />
                </div>
            </div>


        </div>
    )
}

export default EcomusIntro