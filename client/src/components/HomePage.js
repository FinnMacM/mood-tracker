import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      <motion.h1 variants={itemVariants}>Welcome to the Mood Tracker</motion.h1>
      <motion.p variants={itemVariants}>
        Track and analyze your emotional trends.
      </motion.p>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        onClick={() => navigate("/benefits")} 
      >
        Learn about the benefits of tracking your mood
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
