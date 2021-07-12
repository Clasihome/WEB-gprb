import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Hidden, Container, Visible } from 'react-grid-system';
import RateBar from './rate-bar';
import NavDesktop from './nav-desktop';
import NavMovil from './nav-movil';

const MainCont = styled.header`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1500;
  background-color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    position: absolute;
    background-color: ${props => props.dark ? props => props.theme.main.primaryColor : "transparent"};
  }
`

export default ({ dark })=> {

  return(
    <Fragment>
      <Hidden xs>
        <MainCont dark={dark}>
          <Container>
            <NavDesktop dark={dark} />
          </Container>
        </MainCont>
      </Hidden>
      <Visible xs>
        <MainCont>
          <Container>
            <NavMovil />
          </Container>
        </MainCont>
      </Visible>
    </Fragment>
  )
}