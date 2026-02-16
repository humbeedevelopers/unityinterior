"use client";

import Image from "next/image";
import "./Formula.scss";
import BannerImg from "@/images/FormulaImg.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const FORMULA_DATA = [
  {
    number: "01",
    title: "LAYOUT PLANNING",
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
  },
  {
    number: "02",
    title: "CEILING DESIGN",
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
  },
  {
    number: "03",
    title: "ELECTRICAL DESIGN",
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
  },
  {
    number: "04",
    title: "3D ELEVATIONS",
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
  },
  {
    number: "05",
    title: "3D RENDERS",
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
  },
  {
    number: "06",
    title: "WORKING DRAWINGS",
    text:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
  },
];

export default function Formula() {
  return (
    <section className="formula_section">
     <section>
       <div>
        <h2 className="formula_heading">
          MASTER FORMULA FOR
          OUTSTANDING INTERIOR DESIGNS
        </h2>
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
                  <h4 className="formula_title">{item.title}</h4>
                  <p className="formula_description">{item.text}</p>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>

              <div className="home-cardsI__item">
                <h3 className="home-cardsI__title">Site <br/>Visit</h3>
                <p className="home-cardsI__description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>

              <div className="home-cardsI__item">
                <h3 className="home-cardsI__title">MAterial<br /> selection</h3>
                <p className="home-cardsI__description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>

              <div className="home-cardsI__item">
                <h3 className="home-cardsI__title">Artefact<br /> selection</h3>
                <p className="home-cardsI__description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>

            </div>
          </div>
        </section>
    </section>
  );
}
