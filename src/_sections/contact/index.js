import React, { useContext, useReducer, useState } from "react";
import Context from "../../_context";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import { Input, Textarea } from "../../_components/inputs";
import { Button } from "../../_components/buttons";
import Map from "../../_components/map";
import { CheckCircleFilled, LoadingOutlined } from "@ant-design/icons";

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4rem;
  background-color: ${(props) => props.theme.main.primaryColor};
`;

const Title = styled.h1`
  background-color: ${(props) => props.theme.main.primaryColor};
  color: #fff;
  margin: 0;
  font-size: 30px;
  padding: 2rem;
  margin: 0;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;
const SubTitle = styled.p``;
const Form = styled.form`
  padding: 2rem;
  //border-radius: 8px;
  width: 100%;
  margin: 0;
  background-color: ${(props) => props.theme.main.primaryColor};
  /*box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);*/
  @media (min-width: 768px) {
    padding: 4rem;
    padding-top: 0;
    margin: 0;
  }
`;
const ImgCaptcha = styled.img`
  //width: 100%;
  margin-bottom: 1rem;
`;
const MailSpan = styled.span`
  color: #fff;
  text-decoration: underline;
`;
const SubTitleFooter = styled(SubTitle)`
  //color: #fff;
`;
const ButtonContainer = styled.div`
  //margin-top: 32px;
  display: flex;
  //justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const SuccessText = styled.p`
  margin: 0;
  background: #28a745;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => {
  const state = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useReducer(
    (current, next) => ({ ...current, ...next }),
    {
      name: "",
      email: "",
      mobile: "",
      message: "",
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
        body: JSON.stringify(values),
        mode: "cors",
      };

      const data = await fetch("/sendmail.php", options);
      const result = await data.text();
      console.log(result);
      if (result.includes("success")) {
        setValues({
          name: "",
          mobile: "",
          email: "",
          message: "",
        });
        setLoading(false);
        setSuccess(true);
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
      <Container>
        <Row nogutter>
          <Col xs={12} md={12}>
            <Title>¿Dudas? ¿Consultas? Estamos aquí para ayudarlo</Title>
            <Form onSubmit={onSubmit}>
              <Row>
                <Col xs={12} md={6}>
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
                        disabled={loading}
                        id='mobile'
                        onChange={handleChange}
                        value={values.mobile}
                        vertical
                        shadow
                      />
                    </Col>
                    <Col xs={12}>
                      <SubTitleFooter style={{ color: "#fff" }}>
                        También puede escribirnos a{" "}
                        <MailSpan>giancarlo@gprb.cl</MailSpan>
                      </SubTitleFooter>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row>
                    <Col xs={12}>
                      <Input
                        placeholder='Email'
                        disabled={loading}
                        id='email'
                        onChange={handleChange}
                        value={values.email}
                        vertical
                        shadow
                      />
                    </Col>
                    <Col xs={12}>
                      <Textarea
                        rows='7'
                        placeholder='Mensaje'
                        gray
                        disabled={loading}
                        id='message'
                        onChange={handleChange}
                        value={values.message}
                        vertical
                        shadow
                      />
                    </Col>
                    <Col xs={12}>
                      <ButtonContainer>
                        <Button block rounded disabled={loading}>
                          Enviar
                          {loading && (
                            <LoadingOutlined style={{ marginLeft: "1rem" }} />
                          )}
                        </Button>
                      </ButtonContainer>
                    </Col>
                    <Col xs={12}>
                      {success && (
                        <SuccessText>
                          Su mensaje fue enviado con éxito{" "}
                          <CheckCircleFilled style={{ marginLeft: ".3rem" }} />
                        </SuccessText>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={12} md={12}>
            {state.lat && (
              <Map
                lat={parseFloat(state.lat)}
                lng={parseFloat(state.lng)}
                height={300}
                zoom={3}
              />
            )}
          </Col>
        </Row>
      </Container>
    </MainCont>
  );
};
