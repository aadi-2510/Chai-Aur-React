
import './App.css'
import Card from './Components/Card'

function App() {
let p1 = ("I already am into front-end development using technologies like HTML CSS JAVASCRIPT REACT and goal is to become a software developer as soon as i get a job and enhance my learning with hands-On practice")
let p2 = ("I did civil engineering and did a job as a site enginner bt after some time my inner self realised that im not built for this. It is not something that i want or looking for to excell in my career with.")
  return (
    <>
      <h1 className='bg-blue-300 text-black p-4 rounded-lg'>TAILWIND</h1>
      <Card userName ='Devesh Sharma' designation = "Software Developer" body={(p1)} />
      <Card userName ='Devesh Sharma' designation='Civil Site Engineer' body={(p2)}/>
      

    </>
  )
}

export default App
