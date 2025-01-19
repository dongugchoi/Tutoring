import React from 'react'
import '../css/profile.css';

const Profile = ({name, img, employer_id}) => {
  return (
    <div className='container'>
       <div className='container2'> 
     
            <h3 className='name'>사원명 : {name}</h3>
            <img className='imgs' src={img} />
            <h4 className='id'>사원번호 : {employer_id}</h4>

      </div>
    </div>
  )
}

export default Profile
