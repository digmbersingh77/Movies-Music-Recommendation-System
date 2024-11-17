import React from 'react'
import './Movies.css'
import Navbar from '../../components/Navbar/Navbar' 
import hero_banner from '../../Assets/hero_banner.jpg'
// import hero_title from '../../Assets/hero_title.png'
import play_icon from '../../Assets/play_icon.png'
import info_icon from '../../Assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Movies = () => {
  return (
    <div className='Movies'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img'/>
          <div className="hero-caption">
            {/* <img src={hero_title} alt="" className='hero-title' /> */}
            <p>Hello Ji Kesa Ho sare aur kitna ban gaya project aur baki kesa chal rha h project m aur jiven m sab thik</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"}/>
          <TitleCards title={"Top Pics For You"}/>
          <TitleCards title={"Recommended"}/>
          <TitleCards title={"Upcoming"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Movies