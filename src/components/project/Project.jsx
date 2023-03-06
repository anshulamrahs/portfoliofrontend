import React from 'react'
import Card from '../card/Card'
import Pitem from '../pitem/Pitem'
import './project.scss'

const Project = () => {
  return (
    <div className='project'>
      <h1>Featured Projects</h1>
      <div className="left">
        <Pitem/>
        <Card/>
      </div>
    </div>
  )
}

export default Project