import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NameInput from './component/NameInput';
import Item from './component/Item';


function App() {
  const [mbti, setMBTI] = useState([]);
  const [sub, setSub] = useState([]);

  return (
    <div className="App">
       <NameInput mbti={mbti} setMBTI={setMBTI} setSub={setSub}  />
       <Item sub={sub} />
    </div>
  );
}

export default App;
