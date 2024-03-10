import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("skyblue");
  return (
    <>
      {/* full page style */}
      <div className='w-full h-screen duration-500 ease-linear'
        style ={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center mt-2 p-1 inset-x-2'>
          <div className='flex flex-wrap rounded-lg p-2 bg-slate-600 gap-2'>
            <button onClick ={() => setColor("black")} className='bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded'>Black</button>
            <button onClick ={() => setColor("green")} className='bg-green-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded'>Green</button>
            <button onClick ={() => setColor("yellow")} className='bg-yellow-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded'>Yellow</button>
            <button onClick ={() => setColor("red")} className='bg-red-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded'>Red</button>
            <button onClick ={() => setColor("grey")} className='bg-slate-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded'>Grey</button>
            <button onClick ={() => setColor("purple")} className='bg-purple-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded'>Purple</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
