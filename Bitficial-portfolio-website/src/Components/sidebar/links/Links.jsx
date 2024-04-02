import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  // Smooth scrolling function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          variants={itemvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            scrollTo(item); // Scroll to the element
          }}
          href={`#${item}`} // Keep this for accessibility reasons
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
