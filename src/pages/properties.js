import React from 'react';
import Layout from '../_layout/index';
import Hero from '../_sections/properties/hero';
import Properties from '../_sections/properties/properties';
import Reviews from '../_sections/properties/reviews';

export default ({ location })=> (
  <Layout>
    <Hero />
    <Properties location={location} />
    <Reviews />
  </Layout>
)