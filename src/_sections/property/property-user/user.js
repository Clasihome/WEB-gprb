import React, { useContext, useReducer, useState } from "react";
import Context from "../../../_context";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import { Input, Textarea } from "../../../_components/inputs";
import { Button } from "../../../_components/buttons";
import PrintProperty from "../printProperty";
import {
  CheckCircleFilled,
  LoadingOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

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

const Form = styled.form`
  margin-top: 2rem;
`;
const ContactFormButtons = styled.div`
  margin-top: 2rem;
`;

const SuccessText = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.a`
  color: #fff;
  transition: 250ms ease;
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 2rem;
  font-size: 1rem;
  border-top: 1px solid #fff;
  padding: 40px 0px 10px;
  cursor: pointer;
  &:visited {
    color: rgba(255, 255, 255, 0.7);
  }
  &:hover {
    color: #06d765;
  }
`;

export default ({ description }) => {
  const user = {
    ...description._comercialUser[0],
    ...description._comercialUser_person[0],
  };
  const {
    areaCode,
    countryCode,
    phoneNumber,
  } = description._comercialUser_person[0].mobile;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useReducer(
    (current, next) => ({ ...current, ...next }),
    {
      name: "",
      email: "",
      mobile: "",
      message: `Hola ${user.firstName} ${user.lastName}, Estoy interesado en COD: ${description.code}, por favor comunícate conmigo. ¡Gracias!`,
    }
  );

  const handleChange = (e) => {
    setValues({ [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const options = {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          ...values,
          nameAgent: `${user.firstName} ${user.lastName}`,
          emailAgent: user.email,
        }),
        mode: "cors",
      };

      const data = await fetch("/sendmail.php", options);
      const result = await data.text();

      if (result === "success") {
        console.log("MAIL API RESULT", result);
        setLoading(false);
        setSuccess(true);
        setValues({
          name: "",
          mobile: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
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
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12}>
            <Input
              placeholder='Nombre'
              disabled={loading}
              id='name'
              onChange={handleChange}
              value={values.name}
              vertical
              shadow
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder='Teléfono'
              vertical
              shadow
              disabled={loading}
              id='mobile'
              onChange={handleChange}
              value={values.mobile}
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder='Email'
              vertical
              shadow
              disabled={loading}
              id='email'
              onChange={handleChange}
              value={values.email}
            />
          </Col>
          <Col xs={12}>
            <Textarea
              rows='6'
              placeholder='Mensaje'
              disabled={loading}
              id='message'
              onChange={handleChange}
              value={values.message}
              vertical
              shadow
            />
          </Col>
          <br />
          <br />
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button block disabled={loading}>
                Enviar
                {loading && <LoadingOutlined style={{ marginLeft: "1rem" }} />}
              </Button>
              {success && (
                <SuccessText>
                  Su mensaje fue enviado con éxito{" "}
                  <CheckCircleFilled style={{ marginLeft: ".3rem" }} />
                </SuccessText>
              )}
            </ContactFormButtons>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col xs={12} md={12}>
          <IconButton
            href={`https://api.whatsapp.com/send?phone=${countryCode}${areaCode}${phoneNumber}&text=${values.message}`}
          >
            <WhatsAppOutlined style={{ marginRight: 8, fontSize: "2rem" }} />
            <span>
              ¿Deseas contactarme por teléfono o enviarme un WhatsApp?
            </span>
          </IconButton>
          {/*    <Button
                block
                href={`https://api.whatsapp.com/send?phone=${officeState.phone}&text=${values.message}`}
                alt='send whatsapp message'
              >
                Whatsapp
              </Button> */}
        </Col>
        <Col xs={12} md={12}>
          <PrintProperty
            onClick={(e) => e.preventDefault()}
            state={description}
          />
        </Col>{" "}
      </Row>
    </MainCont>
  );
};
