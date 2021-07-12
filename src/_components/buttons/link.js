import styled from 'styled-components';
import { hexToHsl } from '../../_util';

export default styled.button`
  width: ${props => props.block && "100%"};
  border: none;
  //border-bottom: 1px solid ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${props => props.primary ? "#fff" : props.theme.main.primaryColor};
  transition: 250ms ease;
  &:hover{
    color: ${props => hexToHsl(props.theme.main.primaryColor, 55)};
    text-decoration: underline;
  };
  &:active{
    color: ${props => hexToHsl(props.theme.main.primaryColor, 45)};
  }  
`