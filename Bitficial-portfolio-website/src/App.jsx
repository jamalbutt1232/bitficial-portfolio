import "./app.scss";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Services</section>
      <section>3</section>
      <section id="Portfolio">4</section>
      <section>5</section>
      <section>6</section>
      <section id="Contact">7</section>
    </div>
  );
}

export default App;
