import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  @media(min-width: 768px){
  }
`

const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
  font-weight: 300;
  margin-bottom: 4rem;
  text-align: left;
  @media(min-width: 768px){
    padding: 4rem 0;
    font-size: 50px;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4rem;
  @media(min-width: 768px){
    //margin: 0;
  }
`
const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: cover;
`
const Name = styled.p`
  color: ${props => props.theme.main.primaryColor};
  margin-top: 2rem;
  font-weight: bold;
`
const Description = styled.p`
  height: 100px;
  overflow: hidden;
  text-align: left;
`
const ContactCont = styled.ul`
  color: ${props => props.theme.main.primaryColor};
  list-style: none;
  padding: 0;
  margin: 0;
`
const ContactInfo = styled.li`
  font-weight: bold;
  text-align: left;
`

export default ()=> {
  const state = useContext(Context).about.team;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              ¿Quiénes somos?
            </Title>
          </Col>
          {
            state.items.map(m => (
              <Col xs={12} md={3} key={m.id}>
                <Card>
                  <Avatar src={m.avatar} alt={m.lastName} />
                  <Name>{m.fullName}</Name>
                  <Description>
                    {m.cv}
                  </Description>
                  <ContactCont>
                    <ContactInfo>
                      {m.email}
                      {" "}
                      {m.phone}                      
                    </ContactInfo>
                  </ContactCont>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </MainCont>
  )
}