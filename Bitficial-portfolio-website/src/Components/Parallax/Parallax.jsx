import React from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Parallax = ({ type }) => {
const ref = useRef()



const {scrollyprogress}=useScroll({
  target: ref,
  
})


const yBg=useTransform(scrollyprogress, [0,1], ["0%", "100%"])

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
      <motion.h1 style={{y:yBg}}>
        {type === "services" ? "What we did?" : "What we do?"}
      </motion.h1>
      <motion.div className="mountains">1</motion.div>
      <motion.div className="planets">2</motion.div>
      <motion.div className="stars">3</motion.div>
    </div>
  );
};

export default Parallax;
