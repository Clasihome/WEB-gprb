import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { chunkArray } from '../../_util';
import Context from '../../_context';
import { PropertyCard } from '../cards'
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { Row, Col } from 'react-grid-system';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { v1 as uuid } from 'uuid';

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
const StyledButtonBack = styled(ButtonBack)`
  color: #d3d3d3;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const StyledButtonNext = styled(ButtonNext)`
  color: #d3d3d3;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const color = useContext(Context).main.primaryColor;
  const items = useContext(Context).home.properties.items;
  const itemsDesk = chunkArray(items.map(item => item), 3);
  console.log(itemsDesk.length);
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          //isIntrinsicHeight={true}
          totalSlides={itemsDesk.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              itemsDesk.map((mainItem, index) => (
                <Slide key={uuid()} index={index}>
                  <Row style={{ margin: "0 1rem" }}>
                    {
                      mainItem.map(item => (
                        <Col xs={1} md={4}>
                          <PropertyCard {...item} />
                        </Col>
                      ))
                    }
                  </Row>
                </Slide>
              ))
            }
          </Slider>
          <StyledButtonBack className="carousel-back-button">
            <ArrowLeftOutlined />
{/*            <SvgCont width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"/>
          </SvgCont>*/}
          </StyledButtonBack>
          <StyledButtonNext className="carousel-next-button">
          <ArrowRightOutlined />
{/*            <SvgCont width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"/>
        </SvgCont>*/}
          </StyledButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={130}
          //isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <PropertyCard {...item} />
                </Slide>
              ))
            }
          </Slider>
        </CarouselProvider>        
      </Visible>
    </Fragment>
  )
}