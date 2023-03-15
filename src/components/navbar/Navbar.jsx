import React from 'react'
import "./navbar.scss"
import { useState } from 'react'


const white = {background: 'black'}
const orange = {background: '#ff7f02'}

const Navbar = () => {

  const [color, setColor] = useState(white)
  
  return (
    <div className='navbar'>
      <div className="left">
      <span className='logo'>moxa.</span><span className='icon'>com</span>
      <a href="#home"className='link'>Home</a>
      <a href="#about"className='link'>About</a>
      <a href="#work"className='link'>Work</a>
      <a href="#contact"className='link'>Contact</a>
      </div>
      <div className="right">
        <button 
        onMouseOver={
          () => setColor(orange)
        }
        onMouseLeave = {
          () => setColor(white)
        }
        style = {color} className='click' >Hire Me!</button>
      </div>
    </div>
  )
}

export default Navbar