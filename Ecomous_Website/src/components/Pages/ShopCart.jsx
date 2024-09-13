import { BsFire } from "react-icons/bs";
import PageHeader from '../helpers/PageHeader';


const ShopCart = () => {
    return (
        <div>
          <PageHeader tittle={"Shopping Cart"} />
          <div className="lg:flex justify-between items-center max-w-[1500px] px-[18px] lg:px-12 m-auto pt-[35px] pb-[22px] md:pt-[68px] lg:pt-[80px] ">
            <div className='flex items-center justify-center w-full gap-2.5 mb-[30px] lg:mb-[64px]'>
            <BsFire className='FireAnimation text-[crimson] text-[20px]'/>
            <p className='text-[16px] md:text-[20px] leading-[35px] text-center'>These products are limited, checkout within</p>
            <span className='p-[3px] text-white bg-[#db1215] px-3 rounded-[20px] text-[16px] font-semibold max-md:hidden'>10m:00s</span>
            </div>
          </div>
        </div>
      )
}

export default ShopCart