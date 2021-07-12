import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { Button } from '../../_components/buttons';
import RateBar from './rate-bar';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #212121;
`
const NavBar = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "1.5rem"};
`
const NavLink = styled.span`
  color: ${props => props.dark ? "rgba(255, 255, 255, .7)" : "#fff"};
  transition: 250ms ease;
  text-decoration: none !important;
  &:hover{
    color: ${props => props.dark ? "#fff" : props.theme.main.primaryColor};
  }
  &:visited{
    color: #fff;
  }
`
/*const Button = styled.button`
  border: none;
  background: transparent;
  transition: 250ms ease;
  display: flex;
  align-items: center;
  color: #fff;
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
`*/
const SvgCont = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  transition: 250ms ease;
  ${Button}:hover & {
    fill: ${props => props.dark ? props.theme.main.primaryColor : "#fff"};
  }
`

export default ({ dark })=> {
  const office = useContext(Context).office;
  const builderId = useContext(Context).builderId;
  return(
    <MainCont>
      <Logo />
      <NavBar>
        <NavItem noMargin>
          <Link to={`/about?builderId=${builderId}`}>
            <NavLink dark={dark}>
              Nosotros
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={`/properties?builderId=${builderId}`}>
            <NavLink dark={dark}>
              Propiedades
            </NavLink>
          </Link>
        </NavItem>
{/*        <NavItem>
          <Link to="/news">
            <NavLink dark={dark}>
              Noticias
            </NavLink>
          </Link>
</NavItem>*/}
        <NavItem>
          <Link to={`/contact?builderId=${builderId}`}>
            <NavLink dark={dark}>
              Contacto
            </NavLink>
          </Link>
        </NavItem>                          
      </NavBar>
      <div />
      <Button primary={!dark}>
        <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" dark={dark}>
          <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
        </SvgCont>
        {<span>{office.phone}</span>}
      </Button>
  </MainCont>
  )
}