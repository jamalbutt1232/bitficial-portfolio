import { useRef } from "react";
import "./Portfolio.scss";

import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useTransform,
  color,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "CoSafe App",
    img: "https://bitficial.com/assets/Group%2048097023.png",
    disc: (
      <p>
        CoSafe is an indispensable critical communication platform engineered to
        empower organizations in alerting, managing, and proactively preventing
        incidents. Crafted by seasoned crisis management professionals, it
        stands as a beacon of safety, resilience, and sustainability for modern
        enterprises
      </p>
    ),
  },
  {
    id: 2,
    title: "GOBEB",
    img: "https://www.bitficial.com/assets/Logo%20(1).png",
    disc: <p>1111111111111111111111111111111111111111</p>,
  },
  {
    id: 3,
    title: "Finay Music App",
    img: "https://www.bitficial.com/assets/Logo%20(2).png",
    disc: "I don't always speak sarcasm, but when I do, I prefer to be fluent.",
  },
  {
    id: 4,
    title: "dia",
    img: "https://www.bitficial.com/assets/Group%20277.png",
    disc: "I don't always speak sarcasm, but when I do, I prefer to be fluent.",
  },
];

const Single = ({ item }) => {
  return (
    <section className="single-item">
      <div className="container">
        <div className="wrapper">
          <div className="imgcontainer">
            <img className="image" src={item.img} alt="" />
          </div>
          <motion.div
            className="textcontainer"
            whileHover={{
              scale: 1.02,
              backgroundColor: "black",
              color: "purple",
              cursor: "pointer",
            }}
          >
            <h2 className="title">{item.title}</h2>
            <motion.p className="description" whileHover={{ color: "white" }}>
              {item.disc}/
            </motion.p>
            {/* <button className="demo-button">See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ containerRef: ref });

  const springProps = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress-heading">
        <h1 className="progress-text">Featured Works</h1>
        <motion.div className="progressbar" style={{ scaleX: springProps }} />
      </div>
      <div className="content">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
