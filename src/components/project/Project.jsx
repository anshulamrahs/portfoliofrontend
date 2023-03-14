import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './project.scss'

import Anshul from '../assets/ansu.jpeg'
import Male from '../assets/male.png'
import Tex from '../assets/texts.png'
const Project = () => {
  return (
    <div className='projects'>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum unde neque modi commodi magni laboriosam cum similique velit architecto tempore iusto, soluta explicabo earum natus repellat, accusantium perspiciatis adipisci porro numquam autem id fuga voluptates. Enim, architecto. Aut, placeat et? Quia perspiciatis incidunt officiis, dolore voluptatum modi cumque totam? A sunt odit quis, atque delectus unde sequi temporibus consectetur.</p>
      </div>
    </div>
  )
}

export default Project