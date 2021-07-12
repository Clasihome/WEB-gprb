import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import Contact from '../home/contact';
import ContactLight from './contact';
import Map from '../../_components/map';

const MainCont = styled.section`
  padding: 4rem 0;
`
const Title = styled.p`
  height: 100%;
  //background-color: ${props => props.theme.main.primaryColor};
  //color: #fff;
  padding: 2rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

export default ({ noContact })=> {
  const state = useContext(Context).about.ubication;
  const { lat, lng } = useContext(Context).office;
  return(
    <Container>
    <MainCont>
      <Row nogutter>
        <Col xs={12} md={6} >
          <Title>
            {state.title}
          </Title>
        </Col>
        <Col xs={12} md={6}>
          {
            lat && (
              <Map
              lat={parseFloat(lat)}
              lng={parseFloat(lng)}
              height={300}
              zoom={3}
            />         
            )
          }   
        </Col>        
      </Row>
      {
        !noContact &&(
          <Fragment>
          <Visible xs>
            <Row>
              <Col light xs={12}>
                <Contact noMargin />
              </Col>
            </Row>
          </Visible>       
          <Hidden xs>
            <ContactLight />
          </Hidden>
          </Fragment>
        )
      }
    </MainCont>
    </Container>
  )
}