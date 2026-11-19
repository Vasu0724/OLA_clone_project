import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ola_logo from '../assets/ola-logo-13042023.svg'
import hamburger from '../assets/hamburger.png'

import Ola_S1_pro_plus_menu_img from '../assets/menu_image_s1pro_plus_gen3_v2.webp'
import Ola_S1_pro_menu_img from '../assets/menu_image_s1pro_gen3_v2.webp'
import Ola_S1_x_menu_img from '../assets/menu_image_s1x_gen3_v2.webp'

function Navbar_ola() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="ola_sticky_header">

        {/* TOP NAVBAR */}
          <div className="ola_top_navbar">

            <Link to="/" className="ola_nav_logo" onClick={closeMenu}>
              <img src={ola_logo} alt="Ola Electric" />
            </Link>

            <nav className="ola_top_nav_links">

              <Link to="/" onClick={closeMenu}>
                Home
              </Link>

              <Link to="/s1-pro-plus" onClick={closeMenu}>
                S1 Pro
              </Link>

              <Link to="/s1-pro" onClick={closeMenu}>
                S1 Pro+
              </Link>

              <Link to="/s1-pro" onClick={closeMenu}>
                S1 X
              </Link>

              <Link to="/cell-technology" onClick={closeMenu}>
                Cell Tech
              </Link>

              <Link to="/sign-in" onClick={closeMenu}>
                Sign In
              </Link>
            </nav>

            {/* HAMBURGER */}
            <button
              className="ola_hamburger_btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <span className="ola_close_icon">✕</span>
              ) : (
                <img src={hamburger} alt="" />
              )}
            </button>

          </div>

        {/* DROPDOWN / MEGA MENU */}
        {menuOpen && (
          <div className="navbar_container">

            <div className="navbar_content">

              {/* PRODUCT CARDS */}
              <div className="navbar_product_page">

                <Link
                  to="/s1-pro-plus"
                  className="menu_card navbar_s1_pro_plus_menu"
                  onClick={closeMenu}
                >
                  <img
                    src={Ola_S1_pro_plus_menu_img}
                    alt="Ola S1 Pro Plus"
                  />

                  <span>Ola S1 Pro+</span>
                  <span className="menu_card_a1_gen">Gen3</span>
                </Link>

                <Link
                  to="/s1-pro"
                  className="menu_card navbar_s1_pro_menu"
                  onClick={closeMenu}
                >
                  <img
                    src={Ola_S1_pro_menu_img}
                    alt="Ola S1 Pro"
                  />

                  <span>Ola S1 Pro</span>
                  <span className="menu_card_a1_gen">Gen3</span>
                </Link>

                <Link
                  to="/s1-pro"
                  className="menu_card navbar_s1x_menu"
                  onClick={closeMenu}
                >
                  <img
                    src={Ola_S1_x_menu_img}
                    alt="Ola S1 X"
                  />

                  <span>Ola S1 X</span>
                  <span className="menu_card_a1_gen">Gen3</span>
                </Link>

              </div>

              {/* TECHNOLOGY LINKS */}
              <div className="navbar_link_info_page">

                <div className="navbar_link_heading_tech">
                  <h2>Tech & Design</h2>
                </div>

                <div className="navbar_link_para_tech">

                  <Link to="/cell-technology" onClick={closeMenu}>
                    Cell Tech
                  </Link>

                  <Link to="/cell-technology" onClick={closeMenu}>
                    Manufacturing
                  </Link>

                </div>

              </div>

              <div className="navbar_link_info_page">

                <div className="navbar_link_heading_tech">
                  <h2>Account and policy</h2>
                </div>

                <div className="navbar_link_para_tech">

                  <Link to="/sign-in" onClick={closeMenu}>
                    Sign in
                  </Link>

                  <Link to="/cell-technology" onClick={closeMenu}>
                    Policy
                  </Link>

                  <Link to="/sign-in" onClick={closeMenu}>
                    Sign up
                  </Link>

                </div>

              </div>

            </div>

          </div>
        )}

      </header>
    </>
  )
}

export default Navbar_ola