import './App.css';
import Board from './components/Board.jsx';
import Square from './components/Square.jsx';


function App() {
  return (
    <div className='container'>
        <div className='game_board'> <Board /></div>
        <div className='game_info'> Info</div>
    </div>
  );
}

export default App;
