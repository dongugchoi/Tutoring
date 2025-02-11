import React from 'react'
import '../css/logo.css'

const Logo = () => {
  return (
    <div className="divc">
    <div className="image-wrapper">
      <img src={`${process.env.PUBLIC_URL}/z.jpg`} alt="example" className="center" />
      <span className="text-overlay">COMING SOON <br/>2025</span>
    </div>
  </div>
  )
}

export default Logo;