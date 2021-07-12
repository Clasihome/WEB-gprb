import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { v1 as uuid } from 'uuid';

const chunkArray = (myArray, chunk) =>{
  var results = [];
  while (myArray.length) {
      results.push(myArray.splice(0, chunk));
  }
  return results;
};

const ServiceCont = styled.div`
  padding: 2rem;
`
const ServiceTitle = styled.p`
  font-weight: bold;
`
const ServiceDescription = styled.p`

`
const ServiceContainer = styled.div`
  display: flex;
`
const DotsCont = styled.div`
  position: absolute;
  left: 2.5rem;
  bottom: .4rem;
`

const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
`
const StyledDot = styled(Dot)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: none;
  transition: 250ms ease;
  background-color: #e4e4e4;
  &:nth-child(2n - 1){
    margin: 0 1rem;
  }
  &:disabled{
    background-color: ${props => props.theme.main.primaryColor};
    height: 14px;
    width: 14px;
  }
`

const Service = ({ id, title, description }) => {
  return(
    <ServiceCont>
      <ServiceTitle>
        {title}
      </ServiceTitle>
      <ServiceDescription>
        {description}
      </ServiceDescription>
    </ServiceCont>    
  )
}


export default ()=> {
  const state = useContext(Context);
  const color = state.main.primaryColor;
  const itemsMovil = state.home.services.items;
  const itemsToChunk = state.home.services.items.map(item => item);
  const itemsDesk = chunkArray(itemsToChunk, 3);
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          //naturalSlideHeight={25}
          isIntrinsicHeight={true}
          totalSlides={itemsDesk.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsDesk.map((mainItem, index) => (
                <Slide key={uuid()} index={index}>
                  <ServiceContainer>
                  {
                    mainItem.map(item => (
                        <Service key={item.id} {...item} />
                    ))
                  }
                  </ServiceContainer>
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-text-back-button">
            <ArrowLeftOutlined style={{ color, fontSize: 26 }} />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-text-next-button">
            <ArrowRightOutlined style={{ color, fontSize: 26 }} />
          </ButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
          totalSlides={itemsMovil.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsMovil.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Service {...item} />
                </Slide>
              ))
            }
          </Slider>
            <ButtonBack className="carousel-back-button carousel-text-back-button">
              <ArrowLeftOutlined style={{ color, fontSize: 26 }} />
            </ButtonBack>
            <ButtonNext className="carousel-next-button carousel-text-next-button">
              <ArrowRightOutlined style={{ color, fontSize: 26 }} />
            </ButtonNext>
          </CarouselProvider>
      </Visible>
    </Fragment>
  )
}