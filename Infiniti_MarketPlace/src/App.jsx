import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Banner, Categories, Trending_Auctions, Trending_Products, Trending_Services, Trending_Events } from './Components/Index';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainPage/>
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/Banner' element={<Banner />} />
          <Route path='/Categories' element={<Categories />} />
          <Route path='/Trending_Auctions' element={<Trending_Auctions />} />
          <Route path='/Trending_Products' element={<Trending_Products />} />
          <Route path='/Trending_Services' element={<Trending_Services />} />
          <Route path='/Trending_Events' element={<Trending_Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
