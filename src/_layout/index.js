import React from 'react';
import Context from '../_context';
import data from '../_context/state';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import 'animate.css';
import { useLayout } from '../_hooks';
import LoaderScreen from '../_components/LoaderScreen';

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  position: relative;
  //padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    //padding-top: 89px;
  }
`

export default ({ children, dark })=> {
  
  const { loading, data, error } = useLayout();

  if(loading) return <LoaderScreen />
  if(error) return <p>error de conexión</p>
  return(
    <Context.Provider value={data}>
      <ThemeProvider theme={data}>
        <Layout>
          <Header dark={dark} />
          <Body>
            {children}
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}