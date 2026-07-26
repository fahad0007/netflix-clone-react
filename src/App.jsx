import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ShowPage from './pages/showPage/ShowPage'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  
  return (
    <BrowserRouter>
    <div className='app'>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>Home<Route/>
        <Route path='/ShowPage' element={<ShowPage/>}/>ShowPage<Route/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  )
}

export default App
