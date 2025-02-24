import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navi.css'

const Navi = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='link'>HOME</Link>
      <Link to="/gallery" className='link'>Gallery</Link>
      <Link to="about" className='link'>About</Link>
      
      
    </div>
  )
}

export default Navi
