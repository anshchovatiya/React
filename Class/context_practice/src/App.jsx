import { createContext, useContext, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComOne from './ComOne'


export let MainContext = createContext();

function App() {

  let [color,setColor] = useState("black");
  let SelectedColor = useRef();

  function handleBackgroundToggle(){
    setColor(SelectedColor.current.value)
  }


  return (
    <>
      <MainContext.Provider value={color}>
        <ComOne />
        <div className='Trigger'>
          <input type="color" ref={SelectedColor} />
          <button className='' onClick={handleBackgroundToggle}>Toggle</button>
        </div>
      </MainContext.Provider>
    </>
  )
}

export default App
