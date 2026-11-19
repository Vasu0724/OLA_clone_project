import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cell_tech from './pages/Cell_tech'
import Ola_s1_pro from './pages/Ola_s1_pro'
import Ola_s1_pro_plus from './pages/ola_s1_pro_plus'
import Navbar_ola from './pages/Navbar_ola'
import Homepage from './pages/Homepage'
import Sign_in from './pages/Sign_in'
import OlaS1x from './pages/OlaS1x'
import Manufacturing from './pages/Manufacturing'

function App() {
  return (
    <BrowserRouter>
      <Navbar_ola />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/s1-pro" element={<Ola_s1_pro />} />
        <Route path="/s1-pro-plus" element={<Ola_s1_pro_plus />} />
        <Route path="/cell-technology" element={<Cell_tech />} />
        <Route path='/sign-in' element={<Sign_in/>}/>
        <Route path='/s1-x' element={<OlaS1x />}/>
        <Route path='/cell-manufacturing' element={<Manufacturing />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
