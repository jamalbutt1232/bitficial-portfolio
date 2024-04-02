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

function App() {
  alert("If you are using mobile, use Desktop or PC for better experience");
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
      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
