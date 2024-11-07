import React, {useState, useEffect} from 'react'
import styled from 'styled-components';


const NavContainer = styled.nav`
  height : 70px;
  display : flex;
  width : 100vw;
  position : fixed;
  top : 0;
  left : 0;
  right : 0;
  background-color : ${props => props.show ? "#090b13" : "transparent"};
  justify-content : space-between;
  align-items : center;
  letter-spacing : 16px;
  z-index : 100;
`

const Logo = styled.a`
padding : 0;
width : 90px;
margin-top : 5px;
max-height : 70px;
display : inline-block;

img{
display : block;
width : 100%;
}
`



const Navi = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.screenY > 80){
                setShow(true);
            }else{
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll',() => {});
        }
    },[])

    return (
      <NavContainer show={show}>
        <Logo>
          <img 
            src='/image/logo.png' 
            alt="logo"
            onClick={() => window.location.href = '/'}
          />
        </Logo>
      </NavContainer>
    );
  };

export default Navi
