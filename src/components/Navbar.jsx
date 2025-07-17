import React from 'react'
import './Navbar.css'
import Fire from '../assets/fire.png'
import Star from '../assets/glowing-star.png'
import  party from '../assets/partying-face.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Moviemaniac</h1>
        <div className='navbar_links'>
           <NavLink to='/' >popular <img className = 'navbar_emoji' src={Fire} alt='Fire Emoji'></img></NavLink>
           <NavLink to='/top_rated' >Top Rated <img className='navbar_emoji' src={Star} alt='Trending Emoji'></img></NavLink>
           <NavLink to='/upcoming' >Upcoming <img  className = 'navbar_emoji' src={party} alt='Party Emoji'></img></NavLink>

        </div>
    </div>
  )
}

export default Navbar