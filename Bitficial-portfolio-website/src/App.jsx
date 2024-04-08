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
    url: "https://bitficial.com/assets/Group%20277.png",
    description: "dia",
  },
  {
    url: "https://bitficial.com/assets/Logo%20Alt.png",
    description: "Slick Comments",
  },
  {
    url: "https://bitficial.com/assets/Logo%20(1).png",
    description: "GoBEB",
  },
  {
    url: "https://bitficial.com/assets/Group%2048097023.png",
    description: "Cosafe app",
  },
  {
    url: "https://bitficial.com/assets/Logo%20(2).png",

    description: "Finay Music App",
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
