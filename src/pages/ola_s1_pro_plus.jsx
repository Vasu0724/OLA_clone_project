import React from 'react'
import Intro_s1_pro_plus from './ola_s1_pro+/Intro_s1_pro_plus'
import S1_profile_plus from './ola_s1_pro+/S1_profile_plus'
import S1_pro_performance_plus from './ola_s1_pro+/S1_pro_performance_plus'
import S1_design_plus from './ola_s1_pro+/S1_design_plus'
import S1_technology_plus from './ola_s1_pro+/S1_technology_plus'
import Navbar_ola_end from './navbar_ola/Navbar_ola_end'

function Ola_s1_pro_plus() {
  return (
    <div>
        <Intro_s1_pro_plus/>
        <S1_profile_plus/>
        <S1_pro_performance_plus />
        <S1_design_plus/>
        <S1_technology_plus/>
        <Navbar_ola_end/>
    </div>
  )
}

export default Ola_s1_pro_plus