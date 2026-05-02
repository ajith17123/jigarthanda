import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Ballpit from './components/Ballpit';


function App () {
  useEffect (
    () => {
      AOS.init ({
        duration: 1000,
        once: false,
        easing: "ease-in-out",
      })
    } , []
  )

  return (

    <HashRouter>
      <Ballpit
        count={200}
        gravity={0.7}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={true}
      />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </HashRouter>

  )
}

export default App;
