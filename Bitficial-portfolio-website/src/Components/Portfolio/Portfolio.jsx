import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Slick Comments",
    img: "https://www.bitficial.com/assets/Logo%20Alt.png",
    disc: "I don't always speak sarcasm, but when I do, I prefer to be fluent."
  },
  {
    id: 2,
    title: "GoBEB",
    img: "https://www.bitficial.com/assets/Logo%20(1).png",
    disc: "1111111111111111111111111111111111111111"
  },
  {
    id: 3,
    title: "Finay Music App",
    img: "https://www.bitficial.com/assets/Logo%20(2).png",
    disc: "I don't always speak sarcasm, but when I do, I prefer to be fluent."
  },
  {
    id: 4,
    title: "dia",
    img: "https://www.bitficial.com/assets/Group%20277.png",
    disc: "I don't always speak sarcasm, but when I do, I prefer to be fluent."
  }
];

const Single = ({ item }) => {
  return (
    <section className="single-item">
      <div className="container">
        <div className="wrapper">
          <div className="imgcontainer">
            <img className="image" src={item.img} alt=""/>
          </div>
          <div className="textcontainer">
            <h2>{item.title}</h2>
            <p>{item.disc}</p>
            <button>See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ ref: ref });

  const springProps = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    initial: 1,
    reverse: true
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress-heading">
        <h1 className="progress-text">Featured Works</h1>
        <AnimatePresence>
          <motion.div className="progressbar" style={{ scaleX: springProps }} />
        </AnimatePresence>
      </div>
      <div className="content">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
