import React from 'react'
import { Link } from 'react-router-dom'

const Navi = () => {
  return (
    <div>
      <Link to="/" >HOME</Link>
      <Link to="blogpost" >BlogPost</Link>
      <Link to="postdetail" >PostDetail</Link>
      <Link to="login" >Login</Link>
    </div>
  )
}

export default Navi
