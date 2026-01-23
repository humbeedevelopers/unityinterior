import React from "react";
import "./TruelyMatters.scss";
import Image from "next/image";
import Lightbulb from "@/images/bulb.svg";
import Planet from "@/images/planet.svg";
import StarBadge from "@/images/starbadge.svg";

const TruelyMatters = () => {
  return (
    <section className="truely-matters">
      <div className="tm-container">
        {/* Left Content */}
        <div className="tm-left">
          <h2>
            WHAT TRULY <br /> MATTERS TO US
          </h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>

        {/* Divider */}
        <div className="tm-divider" />

        {/* Right Content */}
        <div className="tm-right">
          <div className="tm-item">
            <div className="tm-icon">
                <Image src={Lightbulb} alt="none" />
            </div>
            <div className="tm-text">
              <h4>CO-CREATION</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="tm-item">
           <div className="tm-icon">
                <Image src={Planet} alt="none" />
            </div>
            <div className="tm-text">
              <h4>SUSTAINABILITY</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="tm-item">
            <div className="tm-icon">
                <Image src={StarBadge} alt="none" />
            </div>
            <div className="tm-text">
              <h4>QUALITY</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruelyMatters;
