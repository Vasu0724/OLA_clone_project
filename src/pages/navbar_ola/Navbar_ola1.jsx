

import React from 'react'
import { Link } from 'react-router-dom'
import ola_logo from '../../assets/ola-logo-13042023.svg'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/olaelectric/',
    icon: 'https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/instagram_icon.svg'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCq0Gj5tEf6xwvPTzx0ZxABQ',
    icon: 'https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/youtube_icon.svg'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/OlaElectric',
    icon: 'https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/twitter_icon.svg'
  },
  {
    name: 'Facebook',
    url: 'https://m.facebook.com/Ola-Electric-104817894981469',
    icon: 'https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/facebook_icon.svg'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/olaelectric',
    icon: 'https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/linkedien_icon.svg'
  }
]

function Navbar_ola1() {
  return (
    <header className="ola_main_navbar">

      <Link to="/" className="ola_nav_logo">
        <img src={ola_logo} alt="Ola Electric" />
      </Link>

      <nav className="ola_nav_links">
        <Link to="/">Home</Link>
        <Link to="/s1-pro">S1 Pro</Link>
        <Link to="/s1-pro-plus">S1 Pro+</Link>
        <Link to="/cell-technology">Cell Technology</Link>
      </nav>

      <div className="ola_nav_social">

        <div className="ola_social_icons">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>

        <a className="ola_call_link" href="tel:08068964050">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/icons/call_us_icon_white_without_bg.svg"
            alt=""
          />
          <span>080 6896 4050</span>
        </a>

      </div>

    </header>
  )
}

export default Navbar_ola1
