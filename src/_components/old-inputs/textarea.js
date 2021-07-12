import styled from 'styled-components';

export default styled.textarea`
  background-color: transparent;
  border-radius: 3px;
  padding: 5px;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: "Relaway";
  margin-bottom: 1rem;
  border: ${props => props.gray ? "1px solid #EBEBEB" : "none" };
  @media(min-width: 768px){
    margin-bottom: ${props => props.vertical ? "1rem" : "0"};
    box-shadow: ${props => props.shadow ? "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)" : "none"};
  }
  &::placeholder{
    color: #fff;
  }
`