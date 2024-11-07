import Banner from './components/Banner';
import Navi from './components/Navi';
import Row from './components/Row';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Container = styled.main`
position : relative;
display : block;
min-height : calc(100vh-250px);
overflow-x : hidden;
top : 80px;
padding : 0 calc(3.5vw + 5px);

&:after{
background-color : black;
content : "";
position : absolute;
inset : 0px;
opacity : 1;
z-index : -1;}
`


function App() {
  return (
    <Container>
        <Navi />
        <Banner />
        <Row />
    </Container>
  );
}

export default App;
