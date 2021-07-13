import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../_context";
import { FormProperty } from "../../_components/forms";
import { Container } from "react-grid-system";
import Fade from "react-reveal/Fade";
import RateBar from "../../_layout/header/rate-bar";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";

const VeryMainCont = styled.section`
  /* background-image: linear-gradient(
      to bottom,
      hsl(0deg 0% 0% / 70%),
      rgb(0 0 0 / 48%)
    ),
    url(${(props) => props.theme.home.hero.background}); */
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
  bottom: -42px;
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

const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;
const SlideImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${(
    props
  ) => props.src}");
  background-size: cover;
  background-position: bottom;
  
`;

const BackgroundSlider = ({ theme }) => (
  <CarouselProvider
    naturalSlideWidth={100}
    //naturalSlideHeight={125}
    isIntrinsicHeight
    totalSlides={4}
    isPlaying
    interval={5000}
  >
    {console.log(theme)}
    <Slider>
      <Slide index={0}>
        <SlideImage src='/hero5.jpg' alt='trabajo' />
      </Slide>
      <Slide index={1}>
        <SlideImage src='/hero4.jpg' alt='cocina' />
      </Slide>
      <Slide index={2}>
        <SlideImage src='/hero3.jpg' alt='tasa de té' />
      </Slide>
      <Slide index={3}>
        <SlideImage src='/hero1.jpg' alt='tasa de té' />
      </Slide>
    </Slider>
    {/*  <CustonDot slide={0} style={{ right: "69px" }} />
    <CustonDot slide={1} style={{ right: "46px" }} />
    <CustonDot slide={2} style={{ right: "23px" }} />
    <CustonDot slide={3} style={{ right: "0px" }} /> */}
  </CarouselProvider>
);

export default () => {
  const state = useContext(Context);

  return (
    <VeryMainCont>
      <Fade>
        {" "}
        <SliderContainer>
          <BackgroundSlider {...state} />
        </SliderContainer>
      </Fade>
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
