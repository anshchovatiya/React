import React from 'react'

const ServicesBox = ({icon,text,description}) => {
  return (
    <div className='px-5 py-[26px]  border border-[#ececec] rounded-[10px] flex flex-col items-center '>
        <span className='text-[30px] mb-9'>{icon}</span>
        <p className='text-[18px] font-medium mb-2'>{text}</p>
        <p className='text-[14px] font-normal'>{description}</p>
    </div>
  )
}

export default ServicesBox
