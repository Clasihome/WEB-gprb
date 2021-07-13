import React, { useContext } from "react";
import Context from "../../../_context";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import { Input, Textarea } from "../../../_components/inputs";
import { Button } from "../../../_components/buttons";
import PrintProperty from "../printProperty";

const MainCont = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.theme.main.primaryColor};
  border: 1px solid #ebebeb;
  height: 100%;
  color: #fff;
  margin-top: 2rem;
  border-radius: 25px;
`;
const UserCont = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 48px;
  min-width: 48px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  @media (min-width: 768px) {
    min-height: 76px;
    min-width: 76px;
    height: 76px;
    width: 76px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`;
const UserInfoCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 1rem;
`;
const UserInfoItem = styled.li``;
const ContactForm = styled.form`
  margin-top: 3rem;
  height: 100%;
`;
const ContactFormButtons = styled.div`
  margin-top: 2rem;
`;

export default ({ description }) => {
  const user = {
    ...description._comercialUser[0],
    ...description._comercialUser_person[0],
  };

  return (
    <MainCont>
      <h2>{user.position}</h2>
      <UserCont>
        <Avatar src={user.avatar} alt={user.lastName} />
        <UserInfoCont>
          <UserInfoItem>
            {user.firstName} ${user.lastName}
          </UserInfoItem>
          <UserInfoItem>
            {user.phone &&
              user.phone.countryCode +
                " " +
                user.phone.areaCode +
                " " +
                user.phone.phoneNumber}
          </UserInfoItem>
          <UserInfoItem>{user.email}</UserInfoItem>
        </UserInfoCont>
      </UserCont>
      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col xs={12}>
            <Input placeholder='Nombre' id='name' vertical shadow />
          </Col>
          <Col xs={12}>
            <Input placeholder='Teléfono' id='phone' vertical shadow />
          </Col>
          <Col xs={12}>
            <Input placeholder='Email' id='email' vertical shadow />
          </Col>
          <Col xs={12}>
            <Textarea
              placeholder='Mensaje'
              id='message'
              vertical
              rows='6'
              shadow
            />
          </Col>
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block>Enviar</Button>
            </ContactFormButtons>
          </Col>
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block>LLamar</Button>
            </ContactFormButtons>
          </Col>
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block>whatsapp</Button>
            </ContactFormButtons>
          </Col>
          <Col xs={12} md={12}>
            <PrintProperty state={description} />
          </Col>
        </Row>
      </ContactForm>
    </MainCont>
  );
};
