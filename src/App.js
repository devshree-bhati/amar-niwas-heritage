import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import History from './components/pages/History'
import Experiences from './components/pages/Experiences'
import Gallery from './components/pages/Gallery'
import Booking from './components/pages/Booking'
import Contact from './components/pages/Contact/Contact'
import './App.css';

const App = () => {
  return (
      <div className="app">
        <BrowserRouter>
          <div className='app-header'>
            <div className='app-overlay'>
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" id='logo'/>
              <Navbar />
            </div>
          </div>
          <div className='app-content'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
};

export default App;
