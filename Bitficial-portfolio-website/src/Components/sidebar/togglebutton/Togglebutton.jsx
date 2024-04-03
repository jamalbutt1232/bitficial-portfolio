import { motion } from "framer-motion";

export const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="50" height="40" viewBox="0 0 24 24">
        <motion.path
          fill="none"
          stroke="purple"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: {
              rotate: 0,
              x: 0,
              y: 0,
              opacity: 1,
            },
            open: {
              rotate: 42,
              x: 7,
              y: 7,
              opacity: 1,
            },
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.path
          fill="none"
          stroke="purple"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        />

        <motion.path
          fill="none"
          stroke="purple"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 21.5 L 20 21.5"
          variants={{
            closed: {
              rotate: 0,
              x: 0,
              y: 0,
              opacity: 1,
            },
            open: {
              rotate: -40,
              x: 8, // Adjusted for center alignment
              y: -11, // Adjusted for center alignment
              opacity: 1,
            },
          }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </button>
  );
};
