import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./hero.scss";
import Portfolio from "../Portfolio/Portfolio";
import { PureComponent } from "react";
const textvariants = {
  scrollbuttons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slider = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h1 className="onetyping">We bring your ideas from </h1>
          <h1 className="typing"> Inception to Completion</h1>
          <div className="buttons">
            <a href="#Portfolio">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "purple",
                  color: "black",
                }}
                whileTap={{ scale: 0.95 }}
              >
                See the latest works
              </motion.button>
            </a>
            <br />
            <br />

            <a href="#Contact">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "violet",
                  color: "black",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </a>
          </div>
          <div className="scrollbutton">
            <motion.img
              variants={textvariants}
              animate="scrollbuttons"
              src="/scroll.png"
              alt=""
            />
          </div>
        </div>
        <motion.div
          className="slidingtext"
          variants={slider}
          initial="initial"
          animate="animate"
        >
          Bitficial
        </motion.div>
        <div className="imagecontainer">
          <motion.img
            src="./Logo.png"
            alt="Descriptive alt text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
