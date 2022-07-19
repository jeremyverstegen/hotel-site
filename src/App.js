import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Reservation from './components/Reservation/Reservation';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
