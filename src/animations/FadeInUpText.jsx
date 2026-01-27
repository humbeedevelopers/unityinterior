"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeInUpText = ({
  children,
  start = "-10%",
  once = false,
  ease = [0.16, 1, 0.3, 1],
  stagger = 0.15,
  disableStagger = false,
  className = "",
}) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: disableStagger ? 0 : stagger,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: ease,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: once, 
        amount: "some",
        margin: `0px 0px ${start} 0px` 
      }}
      variants={containerVariants}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FadeInUpText;