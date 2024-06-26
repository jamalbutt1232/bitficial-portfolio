import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="span1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bitficial Technologies
        </motion.span>

        <div className="social">
          {/* <motion.a href="#" whileHover={{ scale: 1.1 }}>
            <img src="/facebook.png" alt="" />
          </motion.a> */}
          <motion.a
            href="https://www.linkedin.com/company/bitficial-tecnologies/about/"
            target="blank"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/Linkedin.png" alt="" />
          </motion.a>
          {/* <motion.a
            href="https://www.upwork.com/agencies/1488574052499746816/"
            target="blank"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/upwork.png" alt="" />
          </motion.a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
