import React from "react"
import Layout from '../_layout';
import Hero from '../_sections/home/hero';
import Properties from '../_sections/home/properties';
import About from '../_sections/home/about';
import Contact from '../_sections/home/contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Properties />
      <About />
      <Contact />
    </Layout>
  )
}
