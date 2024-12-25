import { useCallback , useEffect, useRef} from "react";
import { useState } from "react"



function App() {
  const [length,setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(number) str += "0123456789";
      if(character) str += "!@#$%^&*()";
      for(let i=0;i<length;i++){
        let char = Math.floor(Math.random()*str.length)
        pass += str.charAt(char)
      } 
      setPassword(pass);
  },[length,number,character,setPassword]) 

  const copyPassword = useCallback(()=>{
    if (!passwordRef.current) {
      console.error("Password input reference is missing.");
      return;
    }
  
    try {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password).then(() => {
        console.log("Password copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy password:", err);
      });
    } catch (error) {
      console.error("Error during password copy:", error);
    }
  }, [password]);
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator]);


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" className="outline-none w-full py-1 px-3" placeholder="password"
        value={password}
        readOnly
        ref={passwordRef}/>
        <button 
        onClick={copyPassword}
        className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={50} 
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        className="cursor-pointer"/>
        <label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" id="numberInput"
        defaultChecked = {number}
        onChange={()=>{setNumber((prev)=>!prev)}}/>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" id="characterInput"
        defaultChecked={character}
        onChange={()=>{
          setCharacter((prev)=>!prev)
        }}/>
        <label htmlFor="charcterInput">Characters</label>
      </div>
     </div>

    </div>
  )
}

export default App
