import React from 'react'
import './Navbar.css'
// import logo from '../../Assets/logo.png'
import search_icon from '../../Assets/search_icon.svg'
import bell_icon from '../../Assets/bell_icon.svg'
import profile_img from '../../Assets/profile_img.png'
import caret_icon from '../../Assets/caret_icon.svg'

import { logout } from '../../firebase'

const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className="navbar-left">
            {/* <img src={logo} alt="" /> */}
            <ul> 
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={profile_img} alt="" className='profile'/>
                <img src={caret_icon} alt="" />
                <div className="dropdown">
                    <button onClick={()=>{logout()}}>Sign Out</button>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Navbar