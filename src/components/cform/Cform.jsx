import React, { useState } from 'react'
import './cform.scss'
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Cform = (props) => {

  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true); 
  };

    const {label,errortext, onChange, id ,name,type, ...otherprops} = props
  return (
    <div className='forminput'>
        <label>{label}<FlashOnIcon className='ico'/></label>
        <input {...otherprops}
         onChange={onChange} 
         onBlur={handleFocus} 
         focused = {focused.toString()}  />
         
        <span>{errortext}</span>
    </div>
  )
}

export default Cform