import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../_context";
import { FormProperty } from "../../_components/forms";
import { Container } from "react-grid-system";
import Fade from "react-reveal/Fade";
import RateBar from "../../_layout/header/rate-bar";

const VeryMainCont = styled.section`
  background-image: linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 70%),
      rgb(0 0 0 / 48%)
    ),
    url(${(props) => props.theme.home.hero.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  margin-bottom: 4rem;
`;
const MainCont = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media (min-width: 768px) {
    margin: 0;
    min-height: calc(100vh - 32px);
  }
`;
const TitleCont = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: left;
  @media (min-width: 768px) {
    max-width: 50%;
    font-size: 50px;
  }
`;
const DownButton = styled.div`
  //text-decoration: none;
  position: relative;
  width: 100%;
  bottom: -142px;
  @media (min-width: 768px) {
    position: absolute;
    bottom: -22px;
  }
`;
const RateCont = styled.div``;
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: ${(props) => props.theme.main.primaryColor};
  }
`;

export default () => {
  const state = useContext(Context);

  return (
    <VeryMainCont>
      <Container>
        <MainCont>
          <Fade cascade center duration={1000}>
            <TitleCont>
              <Fade duration={3000}>
                <Title>{state.home.hero.title}</Title>
              </Fade>
              {/*    <RateCont>
            <RateBar />
          </RateCont> */}
            </TitleCont>
          </Fade>
          <DownButton>
            <Fade bottom>
              <FormProperty shadow />
            </Fade>
          </DownButton>
        </MainCont>
      </Container>
    </VeryMainCont>
  );
};
