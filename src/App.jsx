import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import WhyChooseUs from './Pages/WhyCooseUs';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='mx-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/why-choose-us' element={<WhyChooseUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
