import React from "react";
import { motion } from "framer-motion";

const WordReveal = ({ children, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const childVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const processChildren = (children) => {
    return React.Children.map(children, (child) => {
      // 1. Handle Plain Text
      if (typeof child === "string") {
        return child.split(" ").map((word, i) => (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
            <motion.span variants={childVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
              {word === "" ? "\u00A0" : word}
            </motion.span>
          </span>
        ));
      }
      
      if (React.isValidElement(child)) {
        // If it's a <br />, keep it exactly as is
        if (child.type === "br") return child;

        if (child.type === "span") {
          return React.cloneElement(child, {
            children: processChildren(child.props.children),
            style: { ...child.props.style, display: "inline-block" }
          });
        }

        
        if (typeof child.type === "string" && /^h[1-6]$/i.test(child.type)) {
          return processChildren(child.props.children);
        }

        return processChildren(child.props.children);
      }

      return null;
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: "inline" }} 
    >
      {processChildren(children)}
    </motion.div>
  );
};

export default WordReveal;