'use client';

import Image from "next/image";
import Banner from "@/images/coreBanner.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./CoreOfferingCards.scss";

gsap.registerPlugin(ScrollTrigger);

const CoreOfferingCards = () => {
  const component = useRef(null);
  const slider = useRef(null);

  const offerings = [
    {
      id: 1,
      title: 'INTERIOR DESIGNING',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: Banner,
    },
    {
      id: 2,
      title: 'ARCHITECTURAL PLANNING',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: Banner,
    },
    {
      id: 3,
      title: '3D VISUALIZATION',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: Banner,
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          start: "top top",
          pin: component.current,
          markers: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
           pinSpacing: true,
        }
      });

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className="core-offering-cards" ref={component} >
      <div className="core-offering-cards__container" >
        
        <h2 className="core-offering-cards__title">
          <ParagraphTextReveal>CORE OFFERINGS</ParagraphTextReveal>
        </h2>

        <div className="core-offering-cards__horizontal" >
          <div className="core-offering-cards__list" ref={slider}>
            {offerings.map((offering) => (
              <div
                key={offering.id}
                className="core-offering-cards__card panel"
              >
                <div className="core-offering-cards__card-header">
                  <h3 className="core-offering-cards__card-title">
                    {offering.title}
                  </h3>
                </div>

                <div className="core-offering-cards__card-content">
                  <div className="core-offering-cards__image-wrapper">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="core-offering-cards__image"
                    />

                    <div className="core-offering-cards__overlay">
                      <p className="core-offering-cards__description">
                        {offering.description}
                      </p>

                      <button className="core-offering-cards__btn">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreOfferingCards;
