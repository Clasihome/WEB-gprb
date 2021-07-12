import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCarousel } from '../../_components/carousels';
import { Rectangular } from '../../_components/banners';
import { navigate } from 'gatsby';

const MainCont = styled.section`
  min-height: 100vh;
  //margin-top: ${props => props.noMargin ? "4rem" : "13rem"};
  padding: 4rem 0;
  @media(min-width:768px){
    padding: 4rem 0;
  }
`
const Title = styled.h2`
  //color: ${props => props.theme.main.primaryColor};
  margin: 0;
  margin-bottom: 4rem;
  font-weight: 300;
  @media(min-width:768px){
  }
`

export default ({ noMargin })=> {
  const state = useContext(Context).home.properties;
  return(
    <MainCont id="properties" noMargin={noMargin}>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              {state.title}
            </Title>                 
          </Col>
          <Col xs={12}>
            <PropertyCarousel />
          </Col>
          <Col xs={12}>
            <Rectangular
              image={state.bannerImage}
              buttonText={state.buttonText}
              title={state.footer}
              icon="/icons/marker.svg"
              onClick={()=> navigate("/properties")}
            />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}