"use client";

import Image from "next/image";
import "./Formula.scss";
import BannerImg from "@/images/FormulaImg.png";

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
      </div>
    </section>
  );
}
