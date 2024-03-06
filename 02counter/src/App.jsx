import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    if(counter <= 30 ){setCounter(counter + 1)}
    else{ ' ' }
    
  }

  const removeValue = () => {
    if(counter == 0 ){
      setCounter = 0}
      else{
        setCounter(counter - 1)
      }
  }
  return (
    <>
     <div>
      <h1>Chai Aur React</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue} >Remove Value {counter}</button>

      <p>Footer : {counter}</p>
     </div>
    </>
  )
}

export default App
