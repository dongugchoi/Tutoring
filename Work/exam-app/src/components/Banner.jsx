import React, { useEffect } from 'react'
import axios from '../api/axios';
import {request} from '../api/requests'

const Banner = () => {
  
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        const response = axios.get(request.fetchNowPlay)
        console.log(response);
    }


  return (
    <div>
      Banner
    </div>
  )
}

export default Banner
