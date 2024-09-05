import React from 'react'
import PageHeader from '../helpers/PageHeader'
import ArrivalSection from '../main/ArrivalSection'

const ShopPage = () => {
  return (
    <div className='max-w-[1540px] m-auto px-[50px]'>
      <PageHeader tittle={"New Arrival"} description={"Shop through our latest selection of Fashion"}/>
      <ArrivalSection/>
    </div>
  )
}

export default ShopPage
