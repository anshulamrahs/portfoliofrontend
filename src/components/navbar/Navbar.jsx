import React from 'react'
import "./navbar.scss"
import { useState } from 'react'
import fav from '../assets/fvg.png'



const white = {background: 'rgba(100, 100, 100, 0.2)',}
const orange = {background: 'rgba(220, 220, 220, 0.2)', color: 'white'}

const Navbar = () => {

  const [color, setColor] = useState(white)
  
  return (
    <div className='navbar'>
      <div className="left">
      <span className='logo'><img  className='ikm' src={fav} alt='log'/>Anshul</span>
      </div>
      <div className="middle">
      <a href="#home"className='link'>Home</a>
      <a href="#about"className='link'>About</a>
      <a href="#work"className='link'>Work</a>
      <a href="#contact"className='link'>Contact</a>

      </div>
      <div className="right">
        <a href="#contact">
        <button 
        onMouseOver={
          () => setColor(orange)
        }
        onMouseLeave = {
          () => setColor(white)
        }
        style = {color} className='click' >Hire Me!</button>
        </a> 
      </div>
    </div>
  )
}

export default Navbar