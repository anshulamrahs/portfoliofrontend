import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './about.scss'

import Anshul from '../assets/ansu.jpeg'
import Male from '../assets/male.png'
import Tex from '../assets/texts.png'
const Project = () => {
  return (
    <div className='projects' id='about'>
      <div className="left">
        <img className='person' src={Anshul} alt="" />
        <img className='persons' src={Male} alt="" />
        <span className='perX'>
          <img src={Tex} className='per' alt=''/>
        </span>
      </div>
      <div className="right">
        <h1>About ME</h1>
        <h3>A Front-end Developer based in INDIA<LocationOnIcon className='icc'/></h3>
        <p>Based in India, I am a front-end Web developer specializing in Javascript and React. I also Provide Clients With UI/UX Designs and Help Them with Their Design Strategies for Their Businesses. I can proudly say That I have a great understanding of the complete web development life cycle. I take pride in building top-notch websites and apps with elegant user interfaces. In my career, I have worked on a wide range of development verticals</p>

        </div>
    </div>
  )
}

export default Project