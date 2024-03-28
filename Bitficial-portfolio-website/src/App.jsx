import "./app.scss";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/navbar/navbar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax />
      </section>
      <section>3</section>
      <section id="Portfolio">4</section>
      <section>5</section>
      <section>6</section>
      <section id="Contact">7</section>
    </div>
  );
}

export default App;
