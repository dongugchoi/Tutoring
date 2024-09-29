import React from 'react'
import Square from './Square'

const board = () => {

    const handleClick =() =>{
        console.log('clicked')
    }
    const renderSquare = (i) =>{
        return <Square value={i} onClick ={handleClick}/>
    }

  return (
    <div>
      <div>NEXT : O/X</div>
      <div className='board_row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className='board_row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className='board_row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

    </div>
  )
}

export default board
