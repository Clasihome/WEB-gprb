import React, { useContext } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Hidden,
  setConfiguration,
} from "react-grid-system";

import Context from "../../../_context";
import Logo from "../../../_layout/header/logo";
import { FormatCurrency } from "../../../_util";

const MainCont = styled.div`
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 30px;
`;

const MainImage = styled.div`
  width: 100%;
  padding: 10px 0px;
`;

const PublicObs = styled.p`
  font-weight: 500;
  white-space: pre-line;
  margin: 0.5rem 0;
`;

const Subtitle = styled.h2`
  font-weight: bold;
  margin: 2rem 0;
  color: #000;
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
const UserInfoItem = styled.li`
  color: #000;
`;

const UserInfoItemName = styled(UserInfoItem)`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.main.primaryColor};
`;

export default ({ state }) => {
  const context = useContext(Context);
  console.log(context);
  return (
    <MainCont>
      <Container styled={{ display: "none" }}>
        <Col md={12}>
          <Logo dark />
        </Col>
        <Row>
          <Col xs={12} md={12}>
            <Title>{state.title}</Title>
          </Col>
          <Col xs={12} md={12}>
            COD: {state.code}
          </Col>
        </Row>
        <br />
        <Row style={{ height: "400px" }}>
          <Col xs={12}>
            <Row>
              <Col xs={8} md={8}>
                <MainImage>
                  <img
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
                    }}
                    src={state.mainImage}
                  />
                </MainImage>
              </Col>
              <Col xs={4} md={4}>
                <MainImage>
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={state.images[1].url}
                  />
                </MainImage>
                <MainImage>
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    src={state.images[2].url}
                  />
                </MainImage>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12} md={8}>
            <PublicObs>{state.publicObservations}</PublicObs>
          </Col>
          <Col xs={12} md={4}>
            <Price>
              {`${state.currency} ${FormatCurrency(
                state.currency,
                state.value
              )}`}
            </Price>
            <h3>
              {state.ubication.commune} - EN {state.operation}
            </h3>

            <br />
            <UserCont>
              <Avatar
                src={state._comercialUser[0].avatar}
                alt={state._comercialUser_person[0].lastName}
              />
              <UserInfoCont>
                <UserInfoItemName>
                  {state._comercialUser_person[0].firstName}{" "}
                  {state._comercialUser_person[0].lastName}
                </UserInfoItemName>
                <br />
                <UserInfoItem>
                  {state._comercialUser_person[0].phone &&
                    state._comercialUser_person[0].phone.countryCode +
                      " " +
                      state._comercialUser_person[0].phone.areaCode +
                      " " +
                      state._comercialUser_person[0].phone.phoneNumber}
                </UserInfoItem>
                <UserInfoItem>{state._comercialUser[0].email}</UserInfoItem>
                <UserInfoItem>{state._comercialUser[0].position}</UserInfoItem>
              </UserInfoCont>
            </UserCont>
          </Col>
        </Row>
      </Container>{" "}
    </MainCont>
  );
};
