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
        {type === "services" ? "What we did?" : "What we do?"}
      </motion.h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
