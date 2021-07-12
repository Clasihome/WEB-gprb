import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Col, Row, } from 'react-grid-system';
import { Select, Input } from '../../_components/inputs';
import { Button } from '../../_components/buttons';

const Form = styled.form`

`

const OptionsCont = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 2rem;
`

const Option = styled.li`
  margin-left: ${props => props.last ? "1rem" : 0};
`

const OptionButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${props => props.active ? "#fff" : "rgba(255, 255, 255, .5)"};
  border-bottom: ${props => props.active ? "1px solid #fff" : "none"};
  transition: 250ms ease;
  font-size: 1rem;
`
const SvgCont = styled.svg`
  fill: #fff;
  margin-left: 1rem;
  ${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }
`

export default ({ filter })=> {
  const [byCode, setByCode] = useState(false);
  return(
    <Form onSubmit={(e)=> e.preventDefault()}>
      <Row>
        <Col xs={12}>
          <OptionsCont>
            <Option>
              <OptionButton active={!byCode} onClick={()=> setByCode(false)}>
                Buscar propiedad
              </OptionButton>
            </Option>
            <Option last>
              <OptionButton active={byCode} onClick={()=> setByCode(true)}>
                Buscar por código
              </OptionButton>
            </Option>        
          </OptionsCont>        
        </Col>
        {
          filter && (
            <Fragment>
              <Col xs={12} md={2}>
                <Input
                  placeholder="Desde"
                  gray
                />
              </Col>              
              <Col xs={12} md={2}>
                <Input
                  placeholder="Hasta"
                  gray
                />                
              </Col>              
              <Col xs={12} md={2}>
                <Select
                  default="Habitaciones"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  gray
                  //vertical={horizontal ? false : true}
                />                  
              </Col>              
              <Col xs={12} md={2}>
                <Select
                  default="Baños"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  gray
                  //vertical={horizontal ? false : true}
                />                  
              </Col>                                                        
              <Col xs={12} md={4}>
                <Select
                  default="Divisa"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  gray
                  //vertical={horizontal ? false : true}
                />                  
              </Col>                                                                      
            </Fragment>
          )
        }
        <Col xs={12} md={3}>
          <Select
            default="Propiedad"
            options={["opcion 1", "opcion 2", "opcion 3"]}
            gray
            vertical
          />          
        </Col>
        <Col xs={12} md={3}>
          <Select
            default="Operación"
            options={["opcion 1", "opcion 2", "opcion 3"]}
            gray
            //vertical={horizontal ? false : true}
          />
        </Col>
        <Col xs={12} md={3}>
          <Input
            placeholder="Comuna"
            gray
            //vertical={horizontal ? false : true}
          />
        </Col>
        <Col xs={12} md={3}>
          <Button block>
            Buscar
            <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" cliRule="evenodd" d="M11.3749 5.68752C11.3749 6.94027 10.9629 8.09586 10.2739 9.03665L14 12.7627L12.7627 14L9.03671 10.274C8.09592 10.9629 6.94023 11.375 5.68749 11.375C2.55152 11.375 0 8.82351 0 5.68752C0 2.55153 2.55149 0 5.68746 0C8.82343 0 11.3749 2.55153 11.3749 5.68752ZM1.75001 5.68752C1.75001 7.8588 3.51623 9.62503 5.68749 9.62503C7.85872 9.62503 9.62497 7.8588 9.62497 5.68752C9.62497 3.51625 7.85875 1.75002 5.68749 1.75002C3.51623 1.75002 1.75001 3.51625 1.75001 5.68752Z"/>
            </SvgCont>
          </Button>
        </Col>                        
      </Row>
    </Form>
  )
}