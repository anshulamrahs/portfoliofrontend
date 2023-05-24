import './contct.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SwipeDownAltIcon from '@mui/icons-material/SwipeDownAlt';



const Contct = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_40mdmup', 'template_i4tur1i', form.current, 'Vp9EdYT5yVC-AxCrx')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contct'>
     <div className="left">
      <div className="foot">
        <div className='cont'>
            <EmailIcon className='icon'/>
            <h3>Message Me</h3>
            <span>anshulamrahs@gmail.com</span>
        </div>
        <div className='cont'>
            <CallIcon className='icon'/>
            <h3>Give me a call</h3>
            <span>+91 7403104444</span>
        </div>
        <div className='cont'>
            <a href='https://www.linkedin.com/in/anshul-sharma-58430814b/'><LinkedInIcon className='icon'/></a>
            <h3>LinkedIn</h3>
            <span>Anshul Sharma</span>
        </div>
        </div>
      </div> 
      <div className="right">
      <div className="tex">
        <h1>Contact</h1>
        <h3>Don't be Shy, Hit Me Up!<SwipeDownAltIcon className='iconn'/></h3>
        </div>
    <div className="forms">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>

    </div>
    </div>
  )
}

export default Contct