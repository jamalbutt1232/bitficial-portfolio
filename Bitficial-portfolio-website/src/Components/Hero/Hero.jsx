import { motion } from "framer-motion";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h1 className="onetyping">We bring your ideas from </h1>
          <h1 className="typing"> Inception to Completion</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact Us</button>
          </div>
        </div>

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
