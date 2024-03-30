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

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0,1], [-300,300])
  return (
    <section ref={ref}>
        <img src={item.img} alt=""/>
        <motion.div className="textcontainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
    
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ ref: ref });

  const springProps = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    initial: 1, // Set initial value to 1 for a large progress bar
    reverse: true // Reverse the animation
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <AnimatePresence>
          <motion.div
            className="progressbar"
            style={{ scaleX: springProps }}
          />
        </AnimatePresence>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
