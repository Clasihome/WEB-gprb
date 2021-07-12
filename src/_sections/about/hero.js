import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Fade from "react-reveal/Fade";
import Context from "../../_context";

const MainCont = styled.section`
  background-image: linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 58%),
      rgb(0 0 0 / 15%)
    ),
    url(${(props) => props.theme.about.hero.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const TitleCont = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.h1`
  position: relative;
  color: #fff;
  padding: 1rem;
  text-align: left;
  margin: 0;
  width: 100%;
  font-weight: 300;
  @media (min-width: 576px) {
    text-align: left;
    width: 50vw;
  }
`;
const Image = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default () => {
  const state = useContext(Context).about;
  return (
    <MainCont>
      <Container>
        <TitleCont>
          <Fade cascade center duration={1000}>
            <Title>{state.hero.title}</Title>
          </Fade>
        </TitleCont>
      </Container>
    </MainCont>
  );
};
