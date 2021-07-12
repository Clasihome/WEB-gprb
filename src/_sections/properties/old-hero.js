import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import { FormProperty } from '../../_components/forms';
import { useWindowSize } from '../../_hooks';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const SectionCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  padding: 2rem;
  margin-top: 4rem;
  @media(min-width: 576px){
    margin-top: 0;
  }
`
const Header = styled.header`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  color: #fff;
  margin: 0;
`
const IconButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, .5);
  transition: 250ms ease;
  &:hover{
    color: #fff;
  }
`
const ButtonContainer = styled.footer`
 display: flex;
 justify-content: center;
 padding: 1rem;
`



export default ()=> {
  const size = useWindowSize();
  const [filter, setFilter] = useState(false);
  return(
    <Container>
      <SectionCont>
        <Header>
          <Title>Propiedades</Title>
          <Hidden xs>
            {
              filter
              ?(
                <IconButton onClick={()=> setFilter(false)}>
                <MinusCircleOutlined style={{ marginRight: 8 }} />
                  Menos filtros
                </IconButton>
              )
              :(
                <IconButton onClick={()=> setFilter(true)}>
                  <PlusCircleOutlined style={{ marginRight: 8 }} />
                  Más filtros
                </IconButton>              
              )
            }
          </Hidden>
        </Header>
        <Row align="center">
          <Col xs={12}>
            <FormProperty filter={filter} />
          </Col>
          <Visible xs>
            <Col xs={12}>
              <ButtonContainer>
                {
                  filter
                  ?(
                    <IconButton onClick={()=> setFilter(false)}>
                      <MinusCircleOutlined style={{ marginRight: 8 }} />
                      Menos filtros
                    </IconButton>
                  )
                  :(
                    <IconButton onClick={()=> setFilter(true)}>
                      <PlusCircleOutlined style={{ marginRight: 8 }} />
                      Más filtros
                    </IconButton>              
                  )
                }            
              </ButtonContainer>              
            </Col>            
          </Visible>
        </Row>
      </SectionCont>
    </Container>
  )
}