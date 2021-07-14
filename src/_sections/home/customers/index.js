import React, { Fragment, useEffect } from "react";
import { gsap } from "gsap";
import { v1 as uuid } from "uuid";
import CUSTOMERS from "../../../_constants/CUSTOMERS_CAROUSEL.json";
import "./index.css";

export default ({ title }) => {
  let controller = null;

  useEffect(() => {
    gsap.set(".box", {
      x: (i) => i * 200,
    });
    const mod = gsap.utils.wrap(0, 200 * CUSTOMERS.length);
    const tween = gsap.to(".box", {
      paused: true,
      duration: 120,
      x: "-=" + 200 * CUSTOMERS.length,
      ease: "linear",
      //paused: true,
      repeat: -1,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + "px",
      },
    });
    controller = tween;
    tween.play();
  });

  return (
    <section className='very-main-cont'>
      <h2 className='title'>{title}</h2>
      <div className='main-cont' id='elm'>
        {CUSTOMERS.map((item, i) => (
          <div key={uuid()} className='box'>
            <img src={item.logo} alt={item.office} className='logo' />
          </div>
        ))}
      </div>
    </section>
  );
};
