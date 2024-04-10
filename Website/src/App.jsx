
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Books from './Components/Books';
import Loandoc from './Components/Loandoc';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Books' element={<Books/>} />
        <Route path='/Loandoc' element={<Loandoc/>} />
      </Routes>
    </Router>  
     {/* <LoanEmi/> */}
    </>
  )
}

export default App
