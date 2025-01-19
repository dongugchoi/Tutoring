import logo from './logo.svg';
import './App.css';
import OpenModalButton from './components/OpenModalButton';
import Modal from '../src/components/modal/Modal';

function App() {
  return (
    <div className="App">
        <OpenModalButton />
        <Modal />
    </div>
  );
}

export default App;
