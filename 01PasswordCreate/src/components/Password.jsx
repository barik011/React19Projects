import { useCallback,useEffect, useRef } from "react";
import { useState } from "react";

const Password = () => {
  const [lenght, setLenght] = useState(8);
  const [allowedNumbers, setAllowedNumbers] = useState(false);
  const [allowedSymbols, setAllowedSymbols] = useState(false);
  const [password, setPassword] = useState("Password");

  const inputRef = useRef(null);
  const passwordGenerator = useCallback( () =>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowedNumbers) str+="0123456789";
    if(allowedSymbols) str+="!@#$%^&*()_+~`|}{[]:;?><,./-="
    
    for (let i = 0; i <= lenght; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    setPassword(pass);
  },[lenght, allowedNumbers, allowedSymbols]);

const inputTextCopyHandler = useCallback(() => {
    //window.navigator.clipboard.writeText(password);
    inputRef.current.select();
    inputRef.current?.setSelectionRange(0,20);
},[lenght, allowedNumbers, allowedSymbols,setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [lenght, allowedNumbers, allowedSymbols]);
  return (
    <>
      <div className="flex flex-col h-40 w-1/2 bg-gray-200 rounded-2xl shadow-lg items-center justify-center">
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="bg-gray-200 border border-gray-300 rounded-l-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            placeholder="Password"
            readOnly
            ref={inputRef}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-2xl" onClick={inputTextCopyHandler}>
            Copy
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="range"
            value={lenght}
            min="0"
            max="100"
            className="w-1/6 mt-2"
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          <div className="ml-2 text-md">Length:{lenght}</div>
          
          <input
            type="checkbox"
            className="ml-1"
            defaultChecked={allowedNumbers}
            onChange={() => {
              setAllowedNumbers(!allowedNumbers);
            }}
          />
          <label className="ml-1">add Numbers</label>
          <input
            type="checkbox"
            className="ml-1"
            defaultChecked={allowedSymbols}
            onChange={() => {
              setAllowedSymbols(!allowedSymbols);
            }}
          />
          <label className="ml-1">add Symbols</label>
        </div>
      </div>
    </>
  );
};
export default Password;
