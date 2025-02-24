import React, {useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
const Search = () => {

    const{Id} =useParams()

  return (
    <div>
        RESULT : {Id}
    </div>
  )
}

export default Search
