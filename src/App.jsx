import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cell_tech from './pages/Cell_tech'
import Ola_s1_pro from './pages/Ola_s1_pro'
import Ola_s1_pro_plus from './pages/ola_s1_pro_plus'
import Navbar_ola from './pages/Navbar_ola'
import Homepage from './pages/Homepage'


function App() {
  return (
    <BrowserRouter>
      <Navbar_ola />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/s1-pro" element={<Ola_s1_pro />} />
        <Route path="/s1-pro-plus" element={<Ola_s1_pro_plus />} />
        <Route path="/cell-technology" element={<Cell_tech />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
