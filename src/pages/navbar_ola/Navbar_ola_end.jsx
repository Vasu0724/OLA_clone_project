// import React from 'react'
// import Ola_S1_pro_plus_menu_img from '../../assets/menu_image_s1pro_plus_gen3_v2.webp'
// import Ola_S1_pro_menu_img from '../../assets/menu_image_s1pro_gen3_v2.webp'
// import Ola_S1_x_menu_img from '../../assets/menu_image_s1x_gen3_v2.webp'

// function Navbar_ola_end() {
//   return (
//     <div className='navbar_container_end'>
//         <div className='navbar_content'>
//             <div className='navbar_product_page'>
//                 <div className='menu_card navbar_s1_pro+_menu'>
//                     <a className='menu_card_a1 end1' href="">
//                         <img src={Ola_S1_pro_plus_menu_img} alt="Ola S1 pro plus" />
//                         <span>Ola S1 Pro+</span>
//                         <span className='menu_card_a1_gen'>Gen3</span>
//                     </a>
//                 </div>
//                 <div className='menu_card navbar_s1_pro_menu'>
//                     <a className='menu_card_a1 end1' href="">
//                         <img src={Ola_S1_pro_menu_img} alt="Ola S1 pro"/>
//                         <span>Ola S1 Pro</span>
//                         <span className='menu_card_a1_gen'>Gen3</span>
//                     </a>
//                 </div>
//                 <div className='menu_card navbar_s1x_menu'>
//                     <a className='menu_card_a1 end1' href="">
//                         <img src={Ola_S1_x_menu_img} alt="Ola S1 x" />
//                         <span>Ola S1 X</span>
//                         <span className='menu_card_a1_gen'>Gen3</span>
//                     </a>
//                 </div>
//             </div>
//             <div className='navbar_link_info_page'>
//                 <div className='navbar_link_heading_tech'>
//                     <h2>Tech & Design</h2>
//                 </div>
//                 <div className='navbar_link_para_tech'>
//                     <p>Cell Tech</p>
//                     <p>Manufacturing</p>
//                     <p>Design</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar_ola_end




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

function Navbar_ola_end() {
  return (
    <footer className="navbar_container_end">

      <div className="navbar_end_top">

        <Link to="/" className="navbar_end_logo">
          <img src={ola_logo} alt="Ola Electric" />
        </Link>

        <div className="navbar_end_contact">

          <div className="navbar_end_social">
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

          <a href="tel:08068964050" className="navbar_end_call">
            <img
              src="https://cdn.olaelectric.com/sites/evdp/icons/call_us_icon_white_without_bg.svg"
              alt=""
            />
            <span>Call: 080 6896 4050</span>
          </a>

        </div>
      </div>

      <div className="navbar_end_divider"></div>

      <div className="navbar_end_content">

        <div className="navbar_end_products">
          <h2>Our Products</h2>

          <Link to="/s1-pro-plus">Ola S1 Pro+</Link>
          <Link to="/s1-pro">Ola S1 Pro</Link>
          <Link to="/s1-pro">Ola S1 X</Link>
        </div>

        <div className="navbar_end_technology">
          <h2>Technology & Design</h2>

          <Link to="/cell-technology">Cell Technology</Link>
          <Link to="/cell-technology">Manufacturing</Link>
          <Link to="/s1-pro#design">Design</Link>
        </div>

        <div className="navbar_end_company">
          <h2>Explore</h2>

          <Link to="/">Home</Link>
          <Link to="/s1-pro">S1 Pro</Link>
          <Link to="/s1-pro-plus">S1 Pro+</Link>
        </div>

      </div>

      <div className="navbar_end_bottom">
        <p>© Ola Electric</p>
        <p>Ride into the future. Ride electric.</p>
      </div>

    </footer>
  )
}

export default Navbar_ola_end