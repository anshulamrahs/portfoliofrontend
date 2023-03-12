import React from 'react'
import "./card.scss";
import Web from '../assets/book.png'


const Card = () => {
  
  return (
    <div className='card'>
    <img className='img' src={Web} alt='' />
    <span className='desc'><a href='_blank'>Booking App UI clone Using React Js</a></span>
    <div className="btn">
    <a href='https://github.com/anshulamrahs/bookingui' className='talk'>Github</a><a href='https://bookingui.netlify.app/' className='talk talks'>Demo</a>
    </div> 
    </div>
  )
}

export default Card