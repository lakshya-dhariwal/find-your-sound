import React from "react";
import { motion } from "framer-motion";

function AnimatedCard({ children }) {
  return (
    <motion.button whileHover={{ scale: 1.175 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
}

export default AnimatedCard;
