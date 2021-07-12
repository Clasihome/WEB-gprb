import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/news/hero';
import News from '../_sections/news/news';
import { Container, Row, Col } from 'react-grid-system';

import Contact from '../_sections/home/contact';

export default ()=> (
  <Layout>
    <Hero />
    <News />
    <Container>
        <Row>
          <Col xs={12}>
            <Contact />
          </Col>
        </Row>
    </Container>    
  </Layout>
)