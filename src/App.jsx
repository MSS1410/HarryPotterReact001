import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'

//importo cada page

import Home from './pages/Home/Home'
// import NotFound from './pages/404/NotFound'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Profile from './pages/Profile/Profile'
import CharacterDetail from './components/CharacterDetail/CharacterDetail'
import HouseCharacters from './components/HouseCharacter/HouseCharacter'
import AllCharacters from './pages/AllCharacters/AllCharacters'
//import componentes

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/*' element={<NotFound />} /> */}
        <Route path='/character/:id' element={<CharacterDetail />} />
        <Route path='/house/:houseName' element={<HouseCharacters />} />
        <Route path='/characters' element={<AllCharacters />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
