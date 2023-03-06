import React from 'react'
import Cform from '../cform/Cform';
import './contact.scss';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const white = {background:'white'}
const orange = {background:'#ff7f02'}

const Contact = () => {
  const [isHovered, setIsHovered] = useState(white)
  
  const [values, setValues] = useState(
    {
      name: '',
      subject: '',
      email: '',
      enquiry: '',
    });

    const inputs = [
      {
        id : 1,
        name : 'Username',
        type : 'text',
        placeholder : 'Username',
        errortext : 'name should be between 6-15 characters long with no symbols',
        label : 'Name',
        pattern : "^[A-Za-z0-9]{3,16}$",
        required : true,
      },
      {
        id : 2,
        name : 'Subject',
        type : 'text',
        placeholder : 'what do you want from me ?',
        errortext : 'Minimum length should be 10-15',
        label : 'Subject',
        pattern : "^[A-Za-z0-9]{0,50}$",
        required : true,
      },
      {
        id : 3,
        name : 'Email',
        type : 'email',
        placeholder : 'What is your email address',
        errortext : 'please enter a valid email address',
        label : 'Email Address',
        required : true,
      },
      {
        id : 4,
        name : 'Enquiry',
        type : 'text',
        placeholder : 'Please explain Your ask',
        errortext : 'Minimum length should be 50 characters',
        label : 'What is this about?',
        pattern : "^[A-Za-z0-9]{0,50}$",
        required : true,
      },
    ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value })
  };

  return (
    <div className='contact'>
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
        <h1>Get in Touch today</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Cform 
          key={input.id} 
          {...input} value={values[input.name]} 
          onChange={onChange}/>
        ))}
        <button onMouseOver={
          () => setIsHovered(orange)
        }
        onMouseLeave ={
          ()=> setIsHovered(white)
        }
        style={isHovered}
          >Submit Now</button>
      </form>
      </div>
      
    </div>
  )
}

export default Contact