import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { ServiceCarousel, ReviewCarousel } from '../../_components/carousels';
import { ArrowRightOutlined } from '@ant-design/icons';
import { navigate } from 'gatsby';

const MainCont = styled.section`  
  position: relative;
  //padding-bottom: 6rem;
  margin-top: 4rem;
  @media(min-width: 768px){
    height: 100%;
  }  
`
const HeroInfoCont = styled.div`
  background-color: transparent;
  min-height: calc(50vh - 4rem);
  margin-bottom: 6rem;
  @media(min-width: 768px){
    margin-bottom: 8rem;
  }
`
const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  height: 100%;
  //padding: 4rem 3rem;
`
const Title = styled.h2`
  font-size: 26px;
  //color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    font-size: 36px;
  }    
`
const Description = styled.p`
  margin: 2rem 0 4rem;
`
const HeroImageContainer = styled.div`
  position: relative;
  height: 250px;
  margin-top: 4rem;
  background-color:  ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`
const HeroImage = styled.img`
  width: 100%;
  //position: absolute;
  //bottom: -5px;
`
const TitleService = styled(Title)`
  //color: ${props => props.theme.main.primaryColor};
  //color: #fff;
  @media(min-width: 768px){
    font-size: 36px;
  }  
`
const ServiceCont = styled.div`
  //color: #fff;
  //background-color:  ${props => props.theme.main.primaryColor};
  padding: 2rem 4rem;
`
const SubTitleService = styled(Description)`
  font-weight: bold;
  margin: 4rem 0 0;
`
const TitleQuoteCont = styled.div`
  padding-top: 4rem;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const QuoteCarouselCont = styled.div`
  //padding-top: 6rem;
  background-color:  ${props => props.theme.main.primaryColor};
  border-radius: 25px;
  width: 80%;
  @media(min-width: 768px){
    //padding-top: 2rem;
  }
`
const CarouselCont = styled.div`
  position: relative;
  //padding-top: 4rem;
  //margin: 4rem 0;
`


export default ()=> {
  const state = useContext(Context).home;
  return(
    <Container>
    <MainCont>
      <HeroInfoCont>
        <Container>
          <Row>
            <Col xs={12} md={6} push={{ md: 6 }}>
                <HeroImage src={state.about.banner.image} />
            </Col>                        
            <Col xs={12} md={6} pull={{ md: 6 }}>
              <DescriptionCont>
                <Title>
                  {state.about.banner.title}
                </Title>
                <Description>
                  {state.about.banner.subTitle}
                </Description>
                <Button primary rounded onClick={()=> navigate("/about")}>
                  {state.about.banner.buttonText}
                  <ArrowRightOutlined style={{ marginLeft: 8 }} />
                </Button>
              </DescriptionCont>
            </Col>            
          </Row>
          </Container>
      </HeroInfoCont>
        <ServiceCont>
          <Row>
            <Col xs={12}>
              <TitleService>Ofrecemos un servicio ajustado a las necesidades de cada cliente</TitleService>
            </Col>
            <Col xs={12}>
              <CarouselCont>
                <ServiceCarousel />
              </CarouselCont>
            </Col>
          </Row>
        </ServiceCont>
        <Row>
          <Col xs={12} md={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <QuoteCarouselCont>
              <ReviewCarousel />
            </QuoteCarouselCont>
            </div>
          </Col>          
        </Row>
    </MainCont>
    </Container>
  )
}