"use client";

import Image from "next/image";
import "./AboutUsMasterpiece.scss";
import Mcircle from "@/images/masterpieceCircle.png"
import PersonImg from "@/images/masterpieceBanner.png";

const AboutUsMasterpiece = () => {
  return (
    <section className="aboutUsMasterpiece">
      <div className="aboutUsMasterpiece__container">


        <div className="aboutUsMasterpiece__textLayer">
          <span className="aboutUsMasterpiece__subtitle">
            CREATING
          </span>

          <h1 className="aboutUsMasterpiece__title">
            MASTER<span>PIECE</span>
          </h1>

          <p className="aboutUsMasterpiece__description">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </p>
        </div>


        <div className="aboutUsMasterpiece__imageLayer">
          <Image
            src={PersonImg}
            alt="Masterpiece Person"
            priority
            className="aboutUsMasterpiece__image"
          />
        </div>

        <div className="aboutUsMasterpiece__circleImage">
          <Image
            src={Mcircle}
            alt="Decorative circle"
          />
        </div>

        {/* <div className="aboutUsMasterpiece__circle">
          <span />
        </div> */}

      </div>
    </section>
  );
};

export default AboutUsMasterpiece;
