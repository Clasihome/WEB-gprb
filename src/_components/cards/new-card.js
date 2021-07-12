import React from 'react';
import styled from 'styled-components';
import Link from '../../_components/link';

const CardCont = styled.div`
  background-color: #fff;
  border: 1px solid #EBEBEB;
`

const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`
const CardTag = styled.span`
  width: 86px;
  height: 27px;
  border-radius: 20px;
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardDescription = styled.div`
  padding: 1rem;
`
const CardTitle = styled.p`
  font-weight: bold;
`
const CardDate = styled.span`
  color: #919191;
  font-size: 14px;
`

export default ({ image, title, tag, date })=>{

  return(
    <Link to="/new">
      <CardCont>
        <CardImage src={image} alt={title} />
        <CardDescription>
          <CardTag>
            {tag}
          </CardTag>
          <CardTitle>
            {title}
          </CardTitle>
          <CardDate>
            {date}
          </CardDate>
        </CardDescription>
      </CardCont>
    </Link>
  )
}