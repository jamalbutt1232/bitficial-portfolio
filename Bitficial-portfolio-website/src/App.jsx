import "./app.scss";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Carousel from "./Components/Carousel/Carousel";
import { slides } from "./Components/data/carouseldata.json";

// import About from "./Components/About/About";
const images = [
  {
    url: "/Slick.png",
    description: "",
  },
  {
    url: "/dia.png",
    description: "",
  },
  {
    url: "/Finay.png",
    description: "",
  },
  {
    url: "/Slick.png",
    description: "",
  },
  {
    url: "/GOBeB.png",

    description: "",
  },
  {
    url: "/cosafe (2).png",

    description: "",
  },
];
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Carousel images={images} />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      {/* <section id="About">
        <About />
      </section> */}
    </div>
  );
}

export default App;
