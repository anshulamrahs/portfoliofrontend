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
    <div className='portfolio'>
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
            <p className='pTex'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem deserunt quasi tempore explicabo repellendus, porro maiores voluptatum eaque error labore odit, eos officiis. Commodi cum, pariatur suscipit quae quos eligendi?</p>
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
    </div>
  )
}

export default Portfolio