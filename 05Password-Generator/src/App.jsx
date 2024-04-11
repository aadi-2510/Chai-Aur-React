import { useCallback, useEffect, useRef, useState } from 'react'

export default function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '0123456789';
    if (char) str += '~@#$%^&*_-+?!';

    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(randomChar)
    }
    setPassword(password)
  }, [length, number, char, setPassword])

  const copyPassword = useCallback( () => {
    // current? represents that we've ( ? - optionally selected) current value, in case there might be null values in useRef hook 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , 24);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect( () => {passwordGenerator()} , [length, number , char , passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className='text-lime-500 text-2xl text-center m-4 p-1 font-bold'>PASSWORD GENERATOR</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref ={passwordRef}
          
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-orange-500 font-bold transition duration-300 ease-in-out'
        >Copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='font-bold'  style={{ cursor: 'pointer', color: 'red' }}
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          className=' checked:bg-blue-500 font-bold'
          onChange={() => {
            setNumber((prev) => !prev);
          }}
          />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              className=' checked:bg-blue-500 font-bold'
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}
