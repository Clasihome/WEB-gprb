import React, { useCallback, useReducer, useEffect } from 'react';
import Layout from '../_layout';
import Hero from '../_sections/property/hero';
import PropertyUser from '../_sections/property/property-user';
import Ubication from '../_sections/property/ubication';
import Properties from '../_sections/home/properties';
import { Row, Col, Container, Visible } from 'react-grid-system';
import Contact from '../_sections/property/property-user/user';
import Interaction from '../_sections/property/interaction-buttons';
import styled from 'styled-components';
import { useQueryParam } from 'gatsby-query-params';
import { urlBuilder } from '../_util';
import { LoadingOutlined, FrownOutlined } from '@ant-design/icons';

const StandCont = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.loading && props.theme.main.primaryColor};
`

export default ({ location })=> {
  const { pathname } = location;
  const propertyId = useQueryParam('propertyId');
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }),{
    loading: true,
    error: false,
    data: null,
  });

  const getProperty = useCallback(async()=> {
    try{
      const url = urlBuilder('https://api.clasihome.com/rest/properties', { propertyId });
      const data = await fetch(url);
      const result = await data.json();
      console.log("PROPETY URL", url);
      console.log("#PROPERTY DATA", result);
      setQuery({ loading: false, data: result });
    }catch(e){
      console.log(e);
      setQuery({ loading: false, error: true });
    }
  },[propertyId]);

  useEffect(()=>{
    if(propertyId){
      getProperty();
    }
  },[propertyId])

  const { data, loading, error } = query;

  if(loading) return (
    <Layout>
      <StandCont loading>
        <LoadingOutlined />
        <p>Cargando...</p>
      </StandCont>
    </Layout>
  )
  if(error) return (
    <Layout>
      <StandCont>
        <FrownOutlined />
        <p>Error de conexión</p>
      </StandCont>
    </Layout>
  );

  return (
    <Layout dark={pathname === "/property" ? true : false}>
      <Hero state={data} />
      <PropertyUser state={data} />
      <Ubication coordinates={data.ubication.location.coordinates}/>
      <Properties noMargin />
      <Visible xs>
        <Container>
          <Row>
            <Col xs={12}>
              <Contact description={data} />
            </Col>
          </Row>
        </Container>
      </Visible>
    </Layout>
  )
}