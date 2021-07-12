import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const RevieweCont = styled.div`
  position: relative;
  padding: 2rem;
  //background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  @media(min-width: 768px){
    flex-direction: row;
    min-height: 50vh;
    align-items: center;
    justify-content: space-around;
  }
`
const ReviewInnerCont = styled.div`
  @media(min-width: 768px){
    width: 50%;
  }
`
const ReviewAuthor = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 4rem;
`
const ReviewDescription = styled.p`
  text-align: center;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const DotsCont = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
`
const QuotationCont = styled.div`
  position: absolute;
  top: -2rem;
  left: 4rem;
`

const StyledDot = styled(Dot)`
  height: 2px;
  width: 2rem;
  //border-radius: 50%;
  border: none;
  transition: 250ms ease;
  background-color: #e4e4e4;
  &:nth-child(2n - 1){
    margin: 0 1rem;
  }
  &:disabled{
    background-color: ${props => props.theme.main.primaryColor};
  }
`

const StyledButtonBack = styled(ButtonBack)`
  position: absolute; 
  top: 50%;
  left: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: #D3D3D3;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const StyledButtonNext = styled(ButtonNext)`
  position: absolute; 
  top: 50%;
  right: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: #D3D3D3;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }  
`

const Review = ({ id, review, author }) => {
  return(
    <RevieweCont>
      <ReviewInnerCont>
        <ReviewDescription>
          {review}
        </ReviewDescription>
        <ReviewAuthor>
          {author}
        </ReviewAuthor>
      </ReviewInnerCont>
    </RevieweCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.home.reviews.items;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <StyledButtonBack>
            <ArrowLeftOutlined />
          </StyledButtonBack>
          <StyledButtonNext>
            <ArrowRightOutlined />
          </StyledButtonNext>
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          {
              Array(items.length).fill(0).map((_,i) => <StyledDot /*style={{ backgroundColor: color }} className="carousel-text-dot"*/ key={i} slide={i} />)
          }         
        </CarouselProvider>
      </Visible>
    </Fragment>
  )
}