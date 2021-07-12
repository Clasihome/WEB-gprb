import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Map from '../../_components/map';

const MainCont = styled.div`
  padding: 2rem 0 4rem;
`

const Title = styled.h2`
  color: #002438;
  margin-bottom: 4rem;
`

export default ({ coordinates })=> {

  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Ubicación</Title>
          </Col>
          <Col xs={12}>
            <Map
              lat={coordinates[1]}
              lng={coordinates[0]}
              height={500}
              zoom={10}
            />
          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}