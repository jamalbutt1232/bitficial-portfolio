import React from "react";
import "./parallax.scss";
import { motion } from "framer-motion";
const Parallax = ({ type }) => {
  return (
    <div
      className="Parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132 , #0c0c1d)"
            : "linear-gradient(180deg, #111132 , #505064)",
      }}
    >
      <motion.h1>
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div className="mountains">1</motion.div>
      <motion.div className="planets">2</motion.div>
      <motion.div className="stars">3</motion.div>
    </div>
  );
};

export default Parallax;
