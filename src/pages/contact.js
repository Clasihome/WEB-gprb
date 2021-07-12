import React from 'react';
import Layout from '../_layout';
import Contact from '../_sections/contact';
import Ubication from '../_sections/about/ubication';

export default ({ location })=> {
  const { pathname } = location;

  return(
    <Layout dark={pathname === "/contact" ? true : false}>
      <Contact />
    </Layout>
  )
}