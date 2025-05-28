import React from 'react'
import { useState } from 'react'
import './App.css'
import Nav from "../src/components/navbar/navbar"
import Logo from '../src/assets/logo.png';
import Footer from './components/footer/footer';
// pages
import Main from "../src/pages/index";
import Members from '../src/pages/member';
import Lore from '../src/pages/lore';
import Gallery from './pages/gallery';
import Contact from "./pages/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
          <Nav Logo={Logo}/>
          <Routes>
             <Route path={'/'} element={<Main/>}/>
             <Route path={'members'} element={<Members/>}/>
             <Route path={'lore'} element={<Lore/>}/>
             <Route path={'gallery'} element={<Gallery/>}/>
             <Route path={'contact'} element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
