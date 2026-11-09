import React from 'react'
import Cell from './compoment/Cell'
import Battery_innovation from './compoment/battery_innovation'
import R_D_Facility from './compoment/R_D_Facility'
import Cell_Gigafactory from './compoment/Cell_Gigafactory'
import Skilled_talent from './compoment/skilled_talent'

function App() {
  return (
    <>
    <div className='contain_main'>
      <Cell/>
      <Battery_innovation/>
      <R_D_Facility/>
      <Cell_Gigafactory/>
      <Skilled_talent/>
    </div>
    </>
  )
}

export default App