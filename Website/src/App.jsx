
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Books from './Books';
import Loandoc from './Loandoc';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import LoanEmi from './LoanEmi';

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
     {/* <Loandoc/>
     <LoanEmi/> */}
    </>
  )
}

export default App
