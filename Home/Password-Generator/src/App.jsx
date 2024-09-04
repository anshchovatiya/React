import { useState, useCallback,useEffect } from "react";
function App() {
  let [length, setLength] = useState(10);
  let [number, setNumber] = useState(false);
  let [character, setCharacter] = useState(false);
  let [Password,setPassword] = useState("df382");
  let [buttonText,setButtonText] = useState("copy");

  // useState --> when variable and function is created using useState hook when we update variable value with hook and update it's value with function it will update all appearance of that variable

  let update = useCallback(()=>{
    let pass = "";
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number){
      values += "1234567890";
    }
    if(character){
      values+="!@#$%^&*()[]{}/`~.,?<>|"
    }
    
    for(let i = 0; i<length; i++){
      let index = Math.floor(Math.random()*values.length);
      pass += values[index];
    }
    
    setButtonText("copy")

    setPassword(pass);

  },[length,number,character])

   useEffect(()=>{
    update();
   },[length,number,character]);
  
  return (
    <>
      <main className="h-svh bg-[#111] w-full flex items-center gap-6 flex-col p-20 text-white select-none">
        <h1 className="text-5xl font-bold my-5">Password Generator</h1>
        <div className="flex h-fit rounded overflow-hidden font-semibold">
          <input className="overflow-auto w-[300px] bg-[#ffffff65] h-full py-2 px-4" readOnly value={Password}/>
          <button className="bg-blue-600 py-2 px-4  h-full" onClick={()=>{window.navigator.clipboard.writeText(Password);setButtonText("copied")}}>{buttonText}</button>
        </div>
        <form className="flex gap-3 items-center">
          <label htmlFor="length" className="flex gap-4">
            <input
              type="range"
              name="length"
              id="length"
              onChange={(event) => {
                setLength(event.target.value);
              }}
              min="6"
              max="100"
              value={length}
            />
            <p className="text-orange-500">
              length <span>{length}</span>
            </p>
          </label>
          <label htmlFor="includeNumbers" className="flex gap-2 items-center" >
            <p>Include Numbers</p>
            <input type="checkbox" name="includeNumbers" id="includeNumbers" onChange={()=>{if(number){setNumber(false)}else{setNumber(true)}}} />
          </label>
          <label
            htmlFor="includeCharacters"
            className="flex gap-2 items-center"
          >
            <p>Include characters</p>
            <input
              type="checkbox"
              name="includeCharacters"
              id="includeCharacters"
              onChange={()=>{if(character){setCharacter(false)}else{setCharacter(true)}}}
            />
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
