import React from 'react'
import './skills.scss'
import Net from '../assets/netf.png'
import Boo from '../assets/book.png'

const Skills = () => {
  return (
    <div className='skill'>
    <h1 className='title'>Featured Projects</h1> 
    <div className="proSt">
    <div className="pro">
      <img className="proImg" src={Net} alt=""/>
    </div>
    <div className="proS">
    <img className="prosImg" src={Boo} alt=""/>
    </div>
    </div> 
    </div>
  )
}

export default Skills