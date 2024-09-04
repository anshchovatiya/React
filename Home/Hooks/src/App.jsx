import { useState } from "react";

function App() {
  let [Counter,SetCounter] = useState(5);

  function Increment(){
    if(Counter<10)
  {  SetCounter(Counter+1);}
  }

  function Decrement(){
    if(Counter>0)
      {  SetCounter(Counter-1);}
  }

  return (
    <>
      <main>
        <h1>Counter</h1>
        <div className="wrapper"> 
          <p>{Counter}</p>
          <p>{Counter}</p>
          <p>{Counter}</p>
        </div>
        <button onClick={Increment}>Increase</button>
        <button onClick={Decrement}>Decrease</button>
      </main>
    </>
  );
}

export default App;
