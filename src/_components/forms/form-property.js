import React, { Fragment, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input, Autocomplete } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';
import FilterForm from './filter-form';
import { SearchOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigateForm } from '../../_hooks';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { getSearchParams } from 'gatsby-query-params';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  @media(min-width: 768px){
    //width: ${props => props.block ? "100%" : "80%"};
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:2;
  }  
`

export default ({ block, shadow, filter })=> {
  const [byCode, setByCode] = useState("");
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: '',
  });
  const params = getSearchParams();
  
  useEffect(()=>{
    if(params){
      setInitial({...params, stringSearch: ''});
    }
    if(byCode){
      setInitial({
        propertyType: '',
        operation: '',
        commune: '',
        stringSearch: '',
        priceMin: '',
        priceMax: '',
        bedrooms: '',
        bathrooms: '',
        currency: '',
      })
    }
  },[params, byCode]);  
  return(
    <Fragment>
    <Form onSubmit={(e) => { e.preventDefault(); onFinish(); }} block={block} shadow={shadow}>
      <Row gutterWidth={32} align="center">
        <Col xs={12} md={2}>
          <Select
            onChange={e => setByCode(e.target.value)}
            value={byCode}
            default="Buscar por"            
            options={["Propiedad", "Código"]}
            primary
            noAll
          />
        </Col>        
        {
          byCode === "Código"
          ?(
            <Col xs={12} md={8}>
              <Autocomplete
                id="stringSearch"
                onSelect={onChange}
                selected={values.commune}
                placeholder="Ingrese el código de la propiedad"
              />
            </Col>        
          )
          :(
            <Fragment>
              <Col xs={12} md={2}>
                <Select
                  id="propertyType"
                  onChange={onChange}
                  value={values.propertyType}
                  default="Propiedad"
                  options={PROPERTY_TYPE}
                  primary
                  capitalize
                /> 
              </Col>
              <Col xs={12} md={2}>
                <Select
                  id="operation"
                  onChange={onChange}        
                  value={values.operation}          
                  default="Operación"
                  options={["VENTA", "ARRIENDO"]}
                  primary
                  capitalize
                />
              </Col>    
              <Col xs={12} md={4}>
                <Autocomplete
                  id="commune"
                  onSelect={onChange}
                  selected={values.commune}
                  options={COMMUNES.map(val => val.name)}
                  placeholder="Comuna"
                />
              </Col>        
            </Fragment>
          )
        }
        <Col xs={12} md={2}>
          <Hidden xs>
            <IconButton primary  style={{ height: 60 }}>
              Buscar
            </IconButton>
          </Hidden>
          <Visible xs>
            <Button primary block shadow>
              Buscar
            </Button>
          </Visible>
        </Col>
      </Row>
    </Form>
    {
      filter && <FilterForm />
    }
    </Fragment>
  )
}