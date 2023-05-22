import React from 'react'
import PortItem from '../portItem/PortItem'
import './portfolio.scss'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Netf from '../assets/netflixxx.png'
import Book from '../assets/booksd.png'
import Admin from '../assets/admin.png'


const Portfolio = () => {
  return (
    <div className='portfolio' id='work'>
      <h1>Featured Work</h1>
      <div className="content">
      </div>
      <div className='porto'>
        <div className="pImg">
           <a href='_blank'>
            <img  src={Netf}  Style="transform: translateY(0%);transition: transform 10s ease-in-out 0s;"alt=""/></a> 
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
     <PortItem
     className="portItem"
     img={Book}
     links="https://bookingui.netlify.app"
     link="https://github.com/anshulamrahs/bookingui"
     name="Booking App"
     desc="This is a Personal Project made using React, Scss and Javascript. React Routing is used for Linking Different pages.The Project has dynamic components with a desktop view"
     />
     <PortItem
     className="portItem"
     img={Admin}
     links="https://admindashbro.netlify.app"
     link="https://github.com/anshulamrahs/Adminpanel"
     name="Admin Dashboard"
     desc="This is a admin dashboard app with multiple pages using react-router and implemented Dark mode using Context Api"/>
    </div>
  )
}

export default Portfolio