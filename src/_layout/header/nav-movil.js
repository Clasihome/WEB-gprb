import React, { useState, useEffect, useContext } from 'react';
import context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { gsap } from 'gsap';
import { Button, Responsive as ButtonResponsive } from '../../_components/buttons';
import RateBar from './rate-bar';
import { Container } from 'react-grid-system';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`
const NavContainer = styled.div`
  padding: 4rem 0;
  position: absolute;
  top: 0;
  left: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.main.primaryColor};;;
`
const NavBar = styled.ul`
  text-align: center;
`
const NavItem = styled.li`
  margin-bottom: ${props => props.noMargin ? 0 : "1rem"};
  //text-align: left;
  font-size: 2rem;
  a{
    color: ${props => props.theme.main.primaryColor};
  }
`
const NavLink = styled.span`
  color: #fff;
  transition: 250ms ease;
  text-decoration: none;
  font-weight: bold;
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
  &:visited{
    color: #fff;
    text-decoration: underline;
  }
`
const SvgCont = styled.svg`
  fill: #fff;
  margin-right: .5rem;
  transition: 250ms ease;
  ${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }
`
const SocialCont = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.main.primaryColor};
`
const SocialItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : '1rem'};
  color: #fff;
`
const SvgIcon = styled.svg`
  fill: #fff;
  margin-right: .5rem;
`
const LogoCont = styled.div`
  position: relative;
  z-index: 100;
`

export default ()=> {
  const [visibleNav, setVisibleNav] = useState(false);
  const builderId = useContext(context).builderId;
  useEffect(()=> {
    if(visibleNav){
      gsap.to("#nav-movil", { duration: .25, left: 0 });
    } else {
      gsap.to("#nav-movil", { duration: .25, left: "100vw" });
    }
  },[visibleNav]);

  return(
    <MainCont>
      <LogoCont>
        <Logo/>
      </LogoCont>
      <ButtonResponsive
        visible={visibleNav}
        onClick={() => setVisibleNav(!visibleNav)}
      />
      <NavContainer id="nav-movil">
        <RateBar />
        <NavBar>
          <Container>
          <NavItem>
            <Link to={`/about?builderId=${builderId}`}>
              <NavLink>
                Nosotros
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`/properties?builderId=${builderId}`}>
              <NavLink>
                Propiedades
              </NavLink>
            </Link>
          </NavItem>
{/*          <NavItem>
            <Link to="/news">
              <NavLink>
                Noticias
              </NavLink>
            </Link>
</NavItem>*/}
          <NavItem>
            <Link to={`/contact?builderId=${builderId}`}>
              <NavLink noMargin>
                Contacto
              </NavLink>
            </Link>
          </NavItem>
          </Container>
        </NavBar>    
        <Container style={{ width: "100%" }}>
          <Button block>
            <SvgCont width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3804 8.79178C9.98958 8.65849 9.50917 8.78077 9.27066 9.02573L7.6965 10.2141C5.87092 9.23956 4.7464 8.11541 3.78521 6.30354L4.93857 4.77039C5.23822 4.47114 5.3457 4.03401 5.21693 3.62385C4.95224 2.82213 4.81779 1.98093 4.81779 1.12343C4.81782 0.503963 4.31386 0 3.69443 0H1.12339C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77639 14 12.8766 14C13.4961 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894Z"/>
            </SvgCont>
            Consultas
          </Button>  
        </Container>          
        <Container style={{ width: "100%" }}>
        <SocialCont>
          <SocialItem>
            Siguenos
          </SocialItem>
          <SocialItem>
            <NavLink href="https://facebook.com" target="_blank">
              <SvgIcon social={true} width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.27373 2.90134C5.87719 2.90134 5.47699 3.28387 5.47699 3.56846V5.47396H8.27186C8.15933 6.93509 7.9283 8.27121 7.9283 8.27121H5.46269V16.5517H1.78855V8.27032H0V5.48389H1.78855V3.20574C1.78855 2.78916 1.69814 0 5.5531 0H8.27586V2.90134H6.27373Z"/>
              </SvgIcon>
            </NavLink>
          </SocialItem>
          <SocialItem>
            <NavLink href="https://instagram.com" target="_blank">
              <SvgIcon social={true} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.54187 0H12.1921C15.2523 0 17.734 2.48165 17.734 5.54187V12.1921C17.734 15.2523 15.2523 17.734 12.1921 17.734H5.54187C2.48165 17.734 0 15.2523 0 12.1921V5.54187C0 2.48165 2.48165 0 5.54187 0ZM12.1921 16.0714C14.3313 16.0714 16.0714 14.3313 16.0714 12.1921V5.54187C16.0714 3.40271 14.3313 1.66256 12.1921 1.66256H5.54187C3.40271 1.66256 1.66256 3.40271 1.66256 5.54187V12.1921C1.66256 14.3313 3.40271 16.0714 5.54187 16.0714H12.1921Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.43359 8.86697C4.43359 6.41857 6.41869 4.43347 8.86709 4.43347C11.3155 4.43347 13.3006 6.41857 13.3006 8.86697C13.3006 11.3154 11.3155 13.3005 8.86709 13.3005C6.41869 13.3005 4.43359 11.3154 4.43359 8.86697ZM6.09616 8.86697C6.09616 10.3943 7.33975 11.6379 8.86709 11.6379C10.3944 11.6379 11.638 10.3943 11.638 8.86697C11.638 7.33852 10.3944 6.09603 8.86709 6.09603C7.33975 6.09603 6.09616 7.33852 6.09616 8.86697Z"/>
                <circle cx="13.6332" cy="4.10096" r="0.590764" fill="#A05FFF"/>
              </SvgIcon>
            </NavLink>
          </SocialItem>          
        </SocialCont>
        </Container>
      </NavContainer>
    </MainCont>
  )
}