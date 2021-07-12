import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  padding: 6rem 0;
  //min-height: 100vh;
  @media(min-width: 576px){
    padding: 6rem 0;
  }
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //height: 70vh;
  margin: 1rem 0;
  @media(min-width: 576px){
    padding: 6rem 0;
    justify-content: center;
  }
`
const Title = styled.h2`
  //color: ${props => props.theme.main.primaryColor};
`
const Description = styled.div`

`
const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  margin-top: 4rem;
  background-color:  ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`
const Image = styled.img`
  width: 100%;
  //position: relative;
  //bottom: -5px;
  top: 0;
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`


export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <HistoryCont>
              <Title>
                {state.history.title}
              </Title>
              <Description dangerouslySetInnerHTML={{__html: state.history.description}} />
            </HistoryCont>
          </Col>
          <Col xs={12} md={7}>
            <Image src={state.description.background} alt="historia" />
          </Col>                    
        </Row>
      </Container>
    </MainCont>
  )
}