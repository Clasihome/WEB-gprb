import React from "react";
import Layout from "../_layout";
import Hero from "../_sections/home/hero";
import Properties from "../_sections/home/properties";
import About from "../_sections/home/about";
import Customers from "../_sections/home/customers";
import Contact from "../_sections/home/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Properties />
      <About />
      <Customers title='NUESTROS CLIENTES CONFÍAN EN NOSOTROS' />
      <Contact />
    </Layout>
  );
}
