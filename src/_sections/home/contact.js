import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';
import { Button } from '../../_components/buttons';
import { ArrowRightOutlined } from '@ant-design/icons';
import { navigate } from 'gatsby';

const SectionCont = styled.div`
  margin-top: ${props => props.noMargin ? 0 : "4rem"};
  padding: 2rem 0;
  //background-color: ${props => props.theme.main.primaryColor};
  //color: ${props => props.theme.main.primaryColor};
`
const TextCont = styled.div`
  
`
const SectionText = styled.p`
  text-align: left;
  @media(min-width: 768px){
    font-size: 1.2rem;
  }
`

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default ({ noMargin })=> {
  const sectionText = useContext(Context).home.contact.title;
  return(
    <Fragment>
        <SectionCont noMargin={noMargin}>
          <Container>
            <Row align="center" justify="center">
              <Col xs={12} md={9}>
                <ButtonCont>
                  <SectionText>
                    {sectionText}
                  </SectionText>          
                </ButtonCont>
              </Col>
              <Col xs={12} md={3}>
                <ButtonCont>
                  <Button primary block onClick={()=> navigate("/contact")}>
                    Contáctanos
                    <ArrowRightOutlined style={{ marginLeft: 8 }} />
                  </Button>
                </ButtonCont>
              </Col>
            </Row>
          </Container>
        </SectionCont>
    </Fragment>
  )
}