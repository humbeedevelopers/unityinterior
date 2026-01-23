import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import "./CoreOffering.scss";

const CoreOfferings = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  const items = [
    { title: "Interior Designing", content: "Lorem ipsum content 1" },
    { title: "Architectural Planning", content: "Lorem ipsum content 2" },
    { title: "3D Visualization", content: "Lorem ipsum content 3" },
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      Math.floor(v * items.length),
      items.length - 1
    );
    setActive(index);
  });

  return (
    <section className="works" ref={ref}>
      <div className="works__sticky">
        <h2 className="works__title">Core Offerings</h2>

        <div className="works__accordion">
          {items.map((item, i) => (
            <motion.div
              key={i}
              animate={{ height: active === i ? 260 : 80 }}
              transition={{ duration: 0.4 }}
              className="accordion"
            >
              <div className="accordion__header">
                <h3>{item.title}</h3>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="accordion__content"
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
