import React from 'react'
import './portItem.scss'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const PortItem = (props) => {
  return (
    <div className='porto'>
        <div className="pImg">
           <a href='_blank'><img  src={props.img} alt=""/></a> 
        </div>
        <div className="pText">
            <h2>{props.name}<LiveTvIcon className='icon'/></h2>
            <p className='pTex'>{props.desc}</p>
            <div className="stack">
                <p>React</p>
                <p>scss</p>
            </div>
            <div className="links">
                <a href={props.link}>Code<GitHubIcon className='ico'/></a>
                <a href={props.links}>Live Demo<OpenInNewIcon className='ico'/></a>
            </div>
        </div>
    </div>
  )
}

export default PortItem