import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import OfficeContext from '../../_context';
import { gsap } from 'gsap';

const BarsCont = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Bar = styled.li`
  background-color: ${props => props.theme.main.primaryColor};
  height: 3px;
  width: 19px;
  margin-bottom: .25rem;
  border-radius: 19px;
`

const Button = styled.button`
  position: relative;
  z-index: 1500;
  background: transparent;
  border: none;
  outline: none !important;
  border-radius: 2px ;
  transition: 250ms ease;
  cursor: pointer;
  @media(min-width: 768px){
    display: none;
  }
`

export default ({ onClick, visible })=> {
  const office = useContext(OfficeContext);
  useEffect(()=> {
    if(visible){
      gsap.to('#responsive-bar-top', .25, { y: 7, rotate: 45, backgroundColor: "#fff" });
      gsap.to('#responsive-bar-middle', .25, { backgroundColor: "#fff", opacity: 0 });
      gsap.to('#responsive-bar-bottom', .25, { y: -7, rotate: -45, backgroundColor: "#fff" });
    } else{
      gsap.to('#responsive-bar-top', .25, { y: 0, rotate: 0, backgroundColor: "#fff" });
      gsap.to('#responsive-bar-middle', .25, { opacity: 1, backgroundColor: "#fff" });
      gsap.to('#responsive-bar-bottom', .25, { y: 0, rotate: 0, backgroundColor: "#fff" });
    }
  },[visible, "#fff"])

  return(
    <Button onClick={onClick}>
      <BarsCont>
        <Bar id="responsive-bar-top" />
        <Bar id="responsive-bar-middle" />
        <Bar id="responsive-bar-bottom" />
      </BarsCont>
    </Button>
  )
};