import React, { useEffect } from 'react'
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
import TrueFocus from './pages/start';'../src/pages/start';
import { HashRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(true);
  useEffect(function(){
    setTimeout(()=>{
      setCount(false);
    },6000)
  },[])
  return (
    <>
      <HashRouter>
          <Nav Logo={Logo}/>
          <Routes>
             <Route path={'/'} element={count?<TrueFocus />:<Main/>}/>
             <Route path={'members'} element={<Members/>}/>
             <Route path={'lore'} element={<Lore/>}/>
             <Route path={'gallery'} element={<Gallery/>}/>
             <Route path={'contact'} element={<Contact/>}/>
          </Routes>
          <Footer/>
      </HashRouter>
    </>
  )
}

export default App

