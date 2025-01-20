import React, { useState } from 'react'
import Square from './Square'

const Board = ({square,onClick,status}) => {

  //fill은 array9칸에 널값으로 넣겠다

  const renderSquare = (i) => {
    return <Square value={square[i]} onClick={() => onClick(i)} />;
  };



  return (
    <div>
      <div>NEXT: {status}</div>
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

export default Board;
