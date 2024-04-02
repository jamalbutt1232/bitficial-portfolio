import { motion } from "framer-motion";
import "./hero.scss";
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
            <a href="Portfolio.jsx">
              <button>See the latest works</button>
            </a>
            <button>Contact Us</button>
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
        {/* <motion.div
          className="slidingtext"
          variants={slider}
          initial="initial"
          animate="animate"
        >
          Bitficial
        </motion.div> */}

        <motion.img
          src="./bitficial.png"
          alt="Descriptive alt text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="imageContainer"
        />
      </div>
    </div>
  );
};

export default Hero;
