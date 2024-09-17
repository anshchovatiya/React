import React from 'react'
import PageHeader from '../helpers/PageHeader'
import ArrivalSection from '../main/ArrivalSection'

const ShopPage = () => {
  return (
    <>
      <PageHeader tittle={"New Arrival"} description={"Shop through our latest selection of Fashion"}/>
    <div className='max-w-[1540px] m-auto'>
      <ArrivalSection/>
    </div>
    </>
  )
}

export default ShopPage
