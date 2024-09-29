import React from 'react'
import square from '../css/square.css'
import Board from '../components/Board.jsx';

const Square = ({value, onClick}) => {
  return (
    <button className='btn' onClick={onClick} >
      {value}
    </button>
  )
}

export default Square
