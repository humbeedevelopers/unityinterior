"use client";

import Image from "next/image";
import "./Formula.scss";
import BannerImg from "@/images/FormulaImg.png";
import { motion } from "framer-motion";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const FORMULA_DATA = [
  {
    number: "01",
    title: "LAYOUT PLANNING",
    text:
      "We map out every inch of your space with intent — optimising flow, function, and proportion so that the foundation of your interior is strong, smart, and built around how you live",
  },
  {
    number: "02",
    title: "CEILING DESIGN",
    text:
      "From sleek modern profiles to detailed false ceilings, we design overhead spaces that elevate the room — adding character, depth, and the right play of light",
  },
  {
    number: "03",
    title: "ELECTRICAL DESIGN",
    text:
      "We plan every switch, socket, and light point with precision — ensuring your interiors are not just beautiful, but functional, future-ready, and effortless to live in",
  },
  {
    number: "04",
    title: "3D ELEVATIONS",
    text:
      "We visualise key walls and feature areas in detailed 3D — helping you preview textures, finishes, and design elements before any execution begins",
  },
  {
    number: "05",
    title: "3D RENDERS",
    text:
      "Photorealistic 3D renders bring your entire space to life — from lighting and materials to furniture and styling, giving you a true preview of the finished interior",
  },
  {
    number: "06",
    title: "WORKING DRAWINGS",
    text:
      "Detailed technical drawings guide every contractor and craftsman on site — ensuring what's built matches the design exactly, down to the last millimetre",
  },
];

export default function Formula() {
  return (
    <section className="formula_section">
      <section>
        <div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="formula_heading">
            MASTER FORMULA FOR
            OUTSTANDING INTERIOR DESIGNS
          </motion.h2>
        </div>
        <div className="formula_container">
          {/* LEFT IMAGE */}
          <div className="formula_image_wrapper">
            <Image
              src={BannerImg}
              alt="Interior Design"
              className="formula_image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="formula_content">
            {/* <h2 className="formula_heading">
            MASTER FORMULA FOR
            <span>OUTSTANDING INTERIOR DESIGNS</span>
          </h2> */}

            <div className="formula_list">
              {FORMULA_DATA.map((item, index) => (
                <div className="formula_item" key={index}>
                  <div className="formula_number">{item.number}</div>

                  <div className="formula_text_content">
                    <motion.h4
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0 }}
                      viewport={{ once: true }}
                      className="formula_title">{item.title}</motion.h4>
                    <motion.p
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0 }}
                      viewport={{ once: true }}
                      className="formula_description">{item.text}</motion.p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*  */}

        </div>
      </section>
      <section className="home-cardsI">
        <div className="home-cardsI__container">

          <h2 className="home-cardsI__heading"><ParagraphTextReveal>During Execution</ParagraphTextReveal></h2>

          <div className="home-cardsI__list">

            <div className="home-cardsI__item home-cardsI__item--active">
              <h3 className="home-cardsI__title">Co<br />ordination</h3>
              <p className="home-cardsI__description">
                We bridge contractors, vendors, and craftsmen — keeping every trade aligned so your project moves smoothly from start to finish
              </p>
            </div>

            <div className="home-cardsI__item">
              <h3 className="home-cardsI__title">Site <br />Visit</h3>
              <p className="home-cardsI__description">
                Regular on-site reviews at every milestone ensure precision, quality, and that the build stays true to the original design
              </p>
            </div>

            <div className="home-cardsI__item">
              <h3 className="home-cardsI__title">MAterial<br /> selection</h3>
              <p className="home-cardsI__description">
                We curate finishes, fabrics, and surfaces that balance beauty and durability — chosen to suit your space and story
              </p>
            </div>

            <div className="home-cardsI__item">
              <h3 className="home-cardsI__title">Artefact<br /> selection</h3>
              <p className="home-cardsI__description">
                Thoughtfully sourced decor, accents, and statement pieces that bring warmth, character, and soul to your finished space
              </p>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}
