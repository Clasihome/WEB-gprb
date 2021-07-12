import React from 'react';
import styled from 'styled-components';

const DefaultOption = styled.option`
  color: #212121;
`
const Option = styled.option`
  color: #212121;
  font-size: 1rem;
`

const Select = styled.select`
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${props => props.primary ? props.theme.main.primaryColor : "#212121"};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 
  background-color: transparent;
  border-radius: 3px;
  padding: 5px;
  height: 44px;
  width: 100%;
  background-image: ${props => props.primary
  ? `url('data:image/svg+xml;utf8,<svg stroke="%23${props.theme.main.primaryColor.substring(1)}" width="28" height="6.633" fill="none" version="1.1" viewBox="0 0 28 6.633" xmlns="http://www.w3.org/2000/svg"><path d="m11.368 0.63261-5.3678 5.3678-5.3678-5.3678"/></svg>')`
  : `url('data:image/svg+xml;utf8,<svg stroke="%23FFFFFF" width="28" height="6.633" fill="none" version="1.1" viewBox="0 0 28 6.633" xmlns="http://www.w3.org/2000/svg"><path d="m11.368 0.63261-5.3678 5.3678-5.3678-5.3678"/></svg>')`};
  background-repeat: no-repeat;
  background-position: right center;
  margin-bottom: 1rem;
  color: #fff;
  cursor: pointer;
  //box-shadow: 0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12);
  border: ${props => props.gray ? "1px solid #EBEBEB" : "none" };
  &::-ms-expand{
    background: transparent;
  }  
  @media(min-width: 768px){
    margin-bottom: 1rem;
    box-shadow: ${props => props.shadow ? "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)" : "none"};
  }
`

export default (props)=> {
  return(
      <Select
        defaultChecked="propiedad"
        {...props}
      >
        <DefaultOption value="">{props.default}</DefaultOption>
        {
          props.options.map((o, index) => <Option key={index}>{o}</Option>)
        }       
      </Select>    
  )
}