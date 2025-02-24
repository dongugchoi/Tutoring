import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [history, setHistory] = useState([ { square : Array(9).fill(null)}]);
  const [isNext, setIsNext] = useState(true);
  console.log('history',history)
  const current = history[history.length - 1];
  let status;
  console.log('current',current)
  console.log('current.square', current.square)

  const handleClick = (i) => {
    const currentSquares = current.square.slice();
    if (calculation(currentSquares) || currentSquares[i]) {
      return;
    }
    currentSquares[i] = isNext ? 'X' : 'O';
    setHistory([...history, { square: currentSquares }]); 
    setIsNext(!isNext);
  };

  const calculation = (square) => {
    const winning_line = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < winning_line.length; i++){
      const [a,b,c] = winning_line[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]){
        return square[a]
      }
    } return null;
  }
  
  const winner = calculation(current.square);

    if(winner){
      status = `winner 는 ` + winner;
    } else {
      status = `NEXT : ${isNext ? 'X' : 'O'}`
    }

    const moves = history.map((step,move) => {
      const desc = move ? 
      '해당 단계로 GO #' + move :
      '처음으로 가기';
      return (
        <li key={move}>
          <button>{desc}</button>
        </li>
      )
    })

  return (
    <div className='container'>
      <div className='game_board'>
        < Board square={current.square} onClick={(i)=>handleClick(i)} status={status}/>
      </div>
      <div className='game_info'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App;
