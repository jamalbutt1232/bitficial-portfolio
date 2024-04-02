import { motion } from "framer-motion";

export const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="50" height="50" viewBox="0 0 24 24">
        {/* Transform the top line into the first diagonal of the cross */}
        <motion.path
          fill="none"
          stroke="black"
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
              rotate: 45,
              x: 5, // Adjusted for center alignment
              y: 7, // Adjusted for center alignment
              opacity: 1,
            },
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Middle line disappears in the open state */}
        <motion.path
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Transform the bottom line into the second diagonal of the cross */}
        <motion.path
          fill="none"
          stroke="black"
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
              rotate: -45,
              x: 5, // Adjusted for center alignment
              y: -7, // Adjusted for center alignment
              opacity: 1,
            },
          }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </button>
  );
};
