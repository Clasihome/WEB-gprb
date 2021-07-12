import React, { useContext, Fragment, useState } from "react";
import styled from "styled-components";
import Context from "../../_context";
import { FormProperty, FilterForm } from "../../_components/forms";
import { Container } from "react-grid-system";
import RateBar from "../../_layout/header/rate-bar";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Zoom from "react-reveal/Zoom";

const VeryMainCont = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.theme.home.hero.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //color: #fff;
`;
const MainCont = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media (min-width: 768px) {
    min-height: calc(100vh - 81px);
  }
`;

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: left;
  color: #fff;
  @media (min-width: 768px) {
    max-width: 50%;
    font-size: 50px;
  }
`;
const DownButton = styled.div`
  //text-decoration: none;
  position: absolute;
  bottom: 30px;
`;
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: ${(props) => props.theme.main.primaryColor};
  }
`;
const MoreButton = styled.button`
  margin: 2rem 0;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.main.primaryColor};
  transition: 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: saturate(5.5);
  }
`;

export default () => {
  const state = useContext(Context);
  const [filter, setFilter] = useState(false);
  return (
    <Fragment>
      <VeryMainCont>
        <Container>
          <MainCont>
            <Title>
              <Zoom cascade>Busca tu propiedad</Zoom>
            </Title>

            <FormProperty shadow filter={filter} />
            <DownButton href='#properties'>
              {/*          <SvgCont width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5"/>
              <path d="M19.2426 14L15 18.2427L10.7574 14" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgCont>*/}
            </DownButton>
          </MainCont>
        </Container>
      </VeryMainCont>
      <Container>
        <MoreButton onClick={() => setFilter(!filter)}>
          {filter ? (
            <Fragment>
              Menos filtros
              <UpOutlined style={{ marginLeft: 8 }} />
            </Fragment>
          ) : (
            <Fragment>
              Más filtros
              <DownOutlined style={{ marginLeft: 8 }} />
            </Fragment>
          )}
        </MoreButton>
      </Container>
    </Fragment>
  );
};
