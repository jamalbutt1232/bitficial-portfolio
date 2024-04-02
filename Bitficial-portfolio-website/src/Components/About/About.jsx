import React from "react";
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-container"
    >
      <h1>Contact Bitficial</h1>
      <p>
        Welcome to Bitficial—where your digital vision comes to life.
        Specializing in full-stack mobile and web development, we are your
        end-to-end partner in creating exceptional digital experiences.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
};

export default About;
