import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bitficial Technologies
        </motion.span>
        <div className="social">
          <motion.a href="#" whileHover={{ scale: 1.1 }}>
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }}>
            <img src="/Linkedin.png" alt="" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }}>
            <img src="/youtube.png" alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
