import React, { useContext } from 'react';
import OfficeContext from '../../_context';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

const HeroCont = styled.div`
  /*background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${props => props.theme.news.hero.background });
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;*/
`
const InnerCont = styled.div`
  //height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 2rem;
  background-color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
  }
`
const HeroTitle = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 36px;
  width: 100%;
  text-align: left;
  @media(min-width: 768px){
    text-align: left;
    font-size: 50px;
    width: 50%;
  }  
`

export default ()=>{
  const state = useContext(OfficeContext);
  return(
    <HeroCont>
      <Container>
        <InnerCont>
          <HeroTitle>
            {state.news.hero.title}
          </HeroTitle>      
        </InnerCont>
      </Container>
    </HeroCont>
  )
}