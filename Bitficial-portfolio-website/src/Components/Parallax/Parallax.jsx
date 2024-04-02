import React, { useEffect, useState } from "react";
import "./parallax.scss";
import { motion } from "framer-motion";

const Parallax = ({ type }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>

      <motion.div
        className="stars"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        3
      </motion.div>
    </div>
  );
};

export default Parallax;
