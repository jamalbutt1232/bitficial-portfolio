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
const backgroundVariants = {
  hidden: { x: "-100vw", opacity: 0 }, // Starts off-screen
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const buttonContainer = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 3,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <motion.h1
            className="onetyping"
            whileHover={{ scale: 1.05, cursor: "pointer" }}
          >
            We bring your ideas from{" "}
          </motion.h1>
          <motion.h1
            className="typing"
            whileHover={{ scale: 1.05, cursor: "pointer" }}
          >
            Inception to Completion
          </motion.h1>
          <motion.div
            className="buttons"
            variants={buttonContainer}
            initial="hidden"
            animate="show"
          >
            <a href="#Portfolio">
              <motion.button
                className="button1"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#8338ec",
                  color: "white",
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
                className="button2"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#8338ec",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>
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
              delay: 0.5,
              duration: 7,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
