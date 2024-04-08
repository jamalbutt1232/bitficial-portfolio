import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.scss";

function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVariants = () => ({
    initials: {
      x: isMobile ? -100 : -500,
      y: isMobile ? 50 : 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 1,
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  });

  return (
    <motion.div
      className="services"
      variants={getVariants()}
      initial="initials"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="textcontainer" variants={getVariants()}>
        {/* <p>
          Bitficial: Crafting Exceptional Digital Experiences.
          <br /> From design to deployment, we bring your vision to life.
        </p> */}
      </motion.div>
      <motion.div className="titlecontainer" variants={getVariants()}>
        <motion.div className="title">
          {/* <img src="/kickstart.jpg" alt="" /> */}
          <h1>
            <motion.b whileHover={{ scale: "1.05", color: "purple" }}>
              Unique &nbsp;
            </motion.b>
            ideas
          </h1>

          <motion.div className="title">
            <h1>
              <br />
              <motion.b whileHover={{ scale: "1.05", color: "purple" }}>
                for your &nbsp;
              </motion.b>
              business
            </h1>
          </motion.div>

          <motion.div className="title">
            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              What we do?
            </motion.button> */}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="listcontainer" variants={getVariants()}>
        <motion.div
          className="box"
          whileHover={{
            scale: "1.01",

            backgroundColor: "black",
            color: "purple",
            cursor: "pointer",
          }}
        >
          <h2>Scalable Cloud Tech</h2>
          <p>
            We deliver scalable cloud technology solutions that seamlessly adapt
            to evolving business needs, ensuring flexibility and efficiency at
            scale.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Cloud_computing"
            target="_blank"
          >
            <button>Click here to know more!</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            scale: "1.01",
            backgroundColor: "black",
            color: "purple",
            cursor: "pointer",
          }}
        >
          <h2>Application and Web Development</h2>
          <p>
            We deliver innovative web and application development solutions
            tailored to meet diverse business needs and user experiences
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Web_development"
            target="_blank"
          >
            <button>Click here to know more!</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            scale: "1.01",
            backgroundColor: "black",
            color: "purple",
            cursor: "pointer",
          }}
        >
          <h2>Admin Panel</h2>
          <p>
            We offer a comprehensive admin panel featuring user management,
            content control, analytics, and customization options for seamless
            site administration.
          </p>
          <a
            href="https://avada-media.ua/en/services/admin-panels/"
            target="_blank"
          >
            <button>Click here to know more!</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            scale: "1.01",
            backgroundColor: "black",
            color: "purple",

            cursor: "pointer",
          }}
        >
          <h2>Web Analytics</h2>
          <p>
            We offer comprehensive web analytics through real-time data
            tracking, user behavior analysis, and actionable insights for
            website
          </p>
          <a href="https://en.wikipedia.org/wiki/Web_analytics" target="_blank">
            <button>Click here to know more!</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
