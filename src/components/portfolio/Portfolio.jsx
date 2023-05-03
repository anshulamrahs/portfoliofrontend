import React from 'react'
import PortItem from '../portItem/PortItem'
import ExtensionIcon from '@mui/icons-material/Extension';
import './portfolio.scss'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Netf from '../assets/netflixxx.png'

const Portfolio = () => {
  return (
    <div className='portfolio' id='work'>
      <div className="content">
        <p>PORTFOLIO</p>
        <span>Each Product is a unique piece of development<ExtensionIcon className='iccc'/></span>
      </div>
      <div className='porto'>
        <div className="pImg">
           <a href='_blank'><img  src={Netf}  Style="transform: translateY(0%);transition: transform 10s ease-in-out 0s;"alt=""/></a> 
        </div>
        <div className="pText">
            <h2>Netflix Clone<LiveTvIcon className='icon'/></h2>
            <p className='pTex'>This is a Personal Project made using React, Scss, Javascript and Three Js is used for modelling.The Project contains the Home and Featured Movies Section and is built for desktop View.</p>
            <div className="stack">
                <p>React</p>
                <p>scss</p>
            </div>
            <div className="links">
                <a href="https://github.com/anshulamrahs/netflixpublished">Code<GitHubIcon className='ico'/></a>
                <a href="https://netflixuiclonex.netlify.app/">Live Demo<OpenInNewIcon className='ico'/></a>
            </div>
        </div>
    </div>
     <PortItem/>
     <PortItem/>
    </div>
  )
}

export default Portfolio