import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Box from './components/Box';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Welcome2 from './components/Welcome2';
import Wrapbox from './components/Wrapbox';
import Box4 from './components/Box4';


function App() {
  return (

    <Wrapbox >
       <Box2 name="빨강박스" color='red'/>
       <Box2 name="노랑박스" color='yellow'/>
       <Box2 name="파랑박스" color='blue'/>
       <Box4 name="파랑박스" color='blue'/>
       <li>aaa</li>
       <li>bbb</li>
       <li>ccc</li>
    </Wrapbox>

  );
}

export default App;
