import React, { useContext } from 'react'
import { MainContext } from './App';

const ComThree = () => {

    let color = useContext(MainContext);

  return (
    <div className='ThridComponent' style={{backgroundColor:color}}>
      
    </div>
  )
}

export default ComThree