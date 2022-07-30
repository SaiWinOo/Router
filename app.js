import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Body from './Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function app() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/body' element={<Body/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default app;