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
      <section>
        <Navbar />
      </section>
      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>
      <section>6</section>
      <section>7</section>
    </div>
  );
}

export default App;
