import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import { useGetIndicators } from '../../_hooks';
import { LoadingOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  //background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  padding: 2rem 0;
  font-size: 12px;
  user-select: none;
`
const RatesCont = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  @media(min-width: 768px){
    font-weight: normal;
    justify-content: flex-start;
    color: #fff;
  }
`
const RateItem = styled.li`
  margin-left: .30rem;
  &::after{
    content: " -"
  }
  @media(min-width: 768px){
    margin-left: .5rem;
    &::after{
      content: " /"
    } 
  }
`
const RateItemNoAfter = styled(RateItem)`
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    &::after{
      content: ""
    } 
  }
`

export default ()=> {
  const { loading, error, data } = useGetIndicators();
  
  if(loading) return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            UF <span><LoadingOutlined /></span>
          </RateItem>
          <RateItem>
            UTM <span><LoadingOutlined /></span>
          </RateItem>
          <RateItemNoAfter>
            Dólar <span><LoadingOutlined /></span>
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  );

  if(error) return <span>error de conextión</span>

  return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            UF {data.uf}
          </RateItem>
          <RateItem>
            UTM {data.utm}
          </RateItem>
          <RateItemNoAfter>
            Dólar {data.dollar}
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  )
}