import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../_context';
import { Container, Row, Col } from 'react-grid-system';

import Gallery from './gallery';
import Description from './description';

const MainCont = styled.div`
  padding-top: 10rem;
`
export default ({ state })=> {
  //const state = useContext(Context).singleProperty;
  return(
    <MainCont>
      <Container>
        <Row gutterWidth={0}>
          <Col xs={12} md={6}>
            <Gallery images={state.images} />
          </Col>
          <Col xs={12} md={6}>
            <Description description={state} />
          </Col>
        </Row>
      </Container>
    </MainCont>    
  )
}