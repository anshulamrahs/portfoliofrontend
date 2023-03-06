import React from 'react'
import './footer.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="news">
            <div className="name">
            <h2>Developed by @anshulamrahs</h2>
            </div>
            <div className="icons">
            <a href='https://twitter.com/anshulamrahs'><TwitterIcon className='icon'/></a>
            <a href='https://www.linkedin.com/in/anshul-sharma-58430814b/'><LinkedInIcon className='icon'/></a>
            <a href='https://github.com/anshulamrahs'><GitHubIcon className='icon'/></a>
     </div>
        </div>
    </div>
  )
}

export default Footer