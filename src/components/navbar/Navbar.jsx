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
      <span className='link'>About</span>
      <span className='link'>Work</span>
      <span className='link'>Skills</span>
      <span className='link'>Services</span>
      <span className='link'>Reviews</span>
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