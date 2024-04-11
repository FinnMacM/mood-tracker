import React from 'react';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const benefits = [
  "Enhanced self-awareness and mental health management.",
  "Identification of emotional patterns and triggers.",
  "Support for personal growth and informed decision-making.",
  "Facilitates Communication with Healthcare Professionals.",
  "Strengthening of community ties through sharing.",
];

const BenefitsList = () => {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      style={{ listStyleType: "none", padding: 0 }}
    >
      {benefits.map((benefit, index) => (
        <motion.li key={index} variants={itemVariants} style={{ marginBottom: 20 }}>
          {benefit}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default BenefitsList;
