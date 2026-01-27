"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CoreOffering.scss";
import Image from "next/image";
import Banner from "@/images/coreBanner.png";

gsap.registerPlugin(ScrollTrigger);

const CORE_OFFERINGS = [
  {
    title: "Interior Designing",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
  },
  {
    title: "Architecture & Planning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
  },
  {
    title: "3D Visualization",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
  },
];

const AccordionScroll = () => {
  const containerRef = useRef(null);
  const regionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${regionsRef.current.length * 900}`,
          // scrub: 0.6,
          scrub: 2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,

        },
      }).to(regionsRef.current, {
        height: "auto",
        opacity: 1,
        duration: 1,
        ease: "none",
        stagger: {
          each: 2,
          delay: 0.5,
          yoyo: true,
          repeat: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="accordion-scroll" ref={containerRef}>
      <h2 className="accordion-scroll__heading">CORE OFFERINGS</h2>

      <div className="accordion-scroll__box">
        <div className="accordion-scroll__content">
          {CORE_OFFERINGS.map((item, index) => (
            <div className="accordion-scroll__item" key={index}>
              <h3 className="accordion-scroll__title">{item.title}</h3>

              <div
                className="accordion-scroll__region"
                ref={(el) => (regionsRef.current[index] = el)}
                role="region"
              >
                <div className="accordion-scroll__media">
                  <Image src={Banner} alt={item.title} />

                  <div className="accordion-scroll__overlay">
                    <p className="accordion-scroll__desc">
                      {item.description}
                    </p>
                    <button className="accordion-scroll__btn">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionScroll;
