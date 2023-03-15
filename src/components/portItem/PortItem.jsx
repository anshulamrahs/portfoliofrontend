import React from 'react'
import Book from '../assets/booksd.png'
import './portItem.scss'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const PortItem = () => {
  return (
    <div className='porto'>
        <div className="pImg">
           <a href='_blank'><img  src={Book}  Style="transform: translateY(0%);transition: transform 10s ease-in-out 0s;"alt=""/></a> 
        </div>
        <div className="pText">
            <h2>Booking App<LiveTvIcon className='icon'/></h2>
            <p className='pTex'>This is a Personal Project made using React, Scss and Javascript. React Routing is used for Linking Different pages.The Project has dynamic components with a desktop view.</p>
            <div className="stack">
                <p>React</p>
                <p>scss</p>
            </div>
            <div className="links">
                <a href="https://github.com/anshulamrahs/bookingui">Code<GitHubIcon className='ico'/></a>
                <a href="https://bookingui.netlify.app/">Live Demo<OpenInNewIcon className='ico'/></a>
            </div>
        </div>
    </div>
  )
}

export default PortItem