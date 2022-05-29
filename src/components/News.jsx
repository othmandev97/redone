import React, { useState, Component, componentDidMount } from "react";
// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import news data
import { newsdata } from "../data/datanews.js";

// options owl carousel
const options = {
  margin: 40,
  responsiveClass: true,
  nav: false,
  loop: true,
  dotsEach: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

export default class Hero extends React.Component {
  render() {
    return (
      <>
        <section className="news__wrapper">
          <div className="news__wrapper--heading">
            <h3>latest news</h3>
            <span>latest news</span>
          </div>
          <div className="news__wrapper--slider">
            <OwlCarousel className="owl-theme" {...options}>
              {newsdata.map((newsitem) => (
                <div className={`item ${newsitem.active && "active"}`}>
                  <img src={newsitem.image} alt={newsitem.imageAlt} />
                  <h4>{newsitem.title}</h4>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </section>
      </>
    );
  }
}
