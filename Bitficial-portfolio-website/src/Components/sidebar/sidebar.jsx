// Sidebar.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import { ToggleButton } from "./togglebutton/Togglebutton";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { stiffness: 300, damping: 30 },
  },
  closed: {
    x: "-100%",
    opacity: 0.5,
    transition: { stiffness: 300, damping: 30 },
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      variants={sidebarVariants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
    >
      <ToggleButton setOpen={setIsOpen} isOpen={isOpen} />
    </motion.div>
  );
};

export default Sidebar;
