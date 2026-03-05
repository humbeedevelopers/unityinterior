"use client"
import React from "react";
import "./TruelyMatters.scss";
import Image from "next/image";
import Lightbulb from "@/images/bulb.svg";
import Planet from "@/images/planet.svg";
import StarBadge from "@/images/starbadge.svg";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";



const TruelyMatters = ({title,
  description,
  // items = [],
}) => {
  return (
    <section className="truely-matters">
      <div className="tm-container">
        {/* Left Content */}
        <div className="tm-left">
          <motion.h2
             initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
          >
            {/* <ParagraphTextReveal>  */}
              {/* {title} */}
              WHAT WE STAND <br />FOR/OUR CORE PRINCIPLES
              {/* </ParagraphTextReveal> */}
          </motion.h2>

          <motion.p

            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* {description} */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </motion.p>
        </div>


        <div className="tm-divider" />
        {/* Divider dynamic content*/}
        {/* <div className="tm-right">
          {items.map((item, index) => (
            <div key={index} className="tm-item">

              <div className="tm-icon">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                )}
              </div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="tm-text"
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>

            </div>
          ))}
        </div> */}

        {/* static content */}
        {/* Right Content */}
        <div className="tm-right">
          <div className="tm-item">
            <div className="tm-icon">
              <Image src={Lightbulb} alt="none" />
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="tm-text">
              <h4>CO-CREATION</h4>
              <p>
                Client-Centric Approach // Collaborative Design
              </p>
            </motion.div>
          </div>

          <div className="tm-item">
            <div className="tm-icon">
              <Image src={Planet} alt="none" />
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="tm-text">
              <h4>SUSTAINABILITY</h4>
              <p>
                Functional Design // Functionality

              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="tm-item">
            <div className="tm-icon">
              <Image src={StarBadge} alt="none" />
            </div>
            <div className="tm-text">
              <h4>QUALITY</h4>
              <p>
                Refined Execution
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TruelyMatters;
