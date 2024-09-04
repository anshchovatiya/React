import { useRef, useState } from 'react'
import './App.css'
import Task1 from './task1'
import Task2 from './task2'
import Task3 from './task3'
import Pasta from './CustoumRecipe'

function App() {
  const [count, setCount] = useState(1);
  const person = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setCount(person.current.value);
  }

  return (
    <>
      {/* <Task1/>
      <Task2/>
      <Task3/>
       */}
      <form onSubmit={handleSubmit}>
        <input type="number" ref={person} />
        <button>Submit</button>
      </form>
      <Pasta Qty={count} />
    </>
  )
}

export default App
