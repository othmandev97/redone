import React, { useState, Component, componentDidMount } from "react";
// images
import RedOneMusic from "../assets/images/hero-images/music.png";
import RedOneFifa from "../assets/images/hero-images/fifa.png";
import RedOneProducer from "../assets/images/hero-images/producer.png";
import RedOneVirtual from "../assets/images/hero-images/virtual.png";
// icons 2
import svgRedOneMusic from "../assets/icons/2/RedOnemusic.svg";
import svgOneFifa from "../assets/icons/2/RedOnefifa.svg";
import svgRedOneProducer from "../assets/icons/2/RedOneproducersvg.svg";
import svgRedOneVirtual from "../assets/icons/2/RedOnevirtuel.svg";
// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// card component
import { Card } from "./Card";


// options owl carousel
const options = {
  margin: 0,
  responsiveClass: true,
  nav: false,
  loop: false,
  dotsEach: false,
  autoplay: false,
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
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
};

// website of redone cards
const cardboxes = [
  {
    id: 1,
    title: "RedOne Music",
    image: RedOneMusic,
    icon: svgRedOneMusic,
    iconAlt: "icon music",
    link : 'https://redone-music.com/',
    active: false,
  },
  {
    id: 2,
    title: "RedOne Fifa",
    image: RedOneFifa,
    icon: svgOneFifa,
    iconAlt: "icon fifa",
    link : 'https://redone-fifa.com/',
    active: false,
  },
  {
    id: 3,
    title: "RedOne Producer",
    image: RedOneProducer,
    icon: svgRedOneProducer,
    iconAlt: "icon producer",
    link : 'https://redone-producer.com/',
    active: false,
  },
  {
    id: 4,
    title: "RedOne Meta",
    image: RedOneVirtual,
    icon: svgRedOneVirtual,
    iconAlt: "icon Meta",
    link : '',
    active: false,
  },
];

export default class Hero extends React.Component {
  render() {
    return (
      <>
        <section className="hero__wrapper">
          <OwlCarousel {...options}>
            <Card data={cardboxes} />
          </OwlCarousel>
        </section>
      </>
    );
  }
}
