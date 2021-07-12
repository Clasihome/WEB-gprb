import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/about/hero';
import History from '../_sections/about/history';
import Description from '../_sections/about/description';
import Stats from '../_sections/about/stats';
import Team from '../_sections/about/team';
import Ubication from '../_sections/about/ubication';

export default ()=> (
  <Layout>
    <Hero />
    <History />
    <Description />
    <Stats />    
    <Team />
    <Ubication />
  </Layout>
)