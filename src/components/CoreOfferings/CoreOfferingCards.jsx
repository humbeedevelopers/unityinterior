'use client';

import Image from "next/image";
import Banner from "@/images/coreBanner.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect } from "react";
import "./CoreOfferingCards.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import CommonButton from "@/animations/Buttons/CommonButton";


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreOfferingCards = () => {
  const component = useRef(null);
  const slider = useRef(null);

  const offerings = [
    {
      id: 1,
      title: 'INTERIOR DESIGNING',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
      image: Banner,
      href: "/services/interior-design",
    },
    {
      id: 2,
      title: 'ARCHITECTURAL PLANNING',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
      image: Banner,
      href: "/services/architectural-planning",
    },
    {
      id: 3,
      title: '3D VISUALIZATION',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
      image: Banner,
      href: "/services/3d-visualization",
    },
  ];

  useLayoutEffect(() => {
    // Wait for all images and content to load
    const timer = setTimeout(() => {
      let ctx = gsap.context(() => {
        if (!slider.current || !component.current) return;

        const panels = slider.current.querySelectorAll(".core-offering-cards__card");

        if (panels.length === 0) return;

        // Force a layout recalculation
        slider.current.style.willChange = 'transform';

        // Get the actual scroll width after everything is rendered
        const getScrollAmount = () => {
          const sliderWidth = slider.current.scrollWidth;
          const windowWidth = window.innerWidth;
          const paddingRight = windowWidth * 0.05; //padding for last card 
          return -(sliderWidth - windowWidth + paddingRight);
        };

        const tween = gsap.to(slider.current, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: component.current,
            start: "top top",
            end: () => `+=${slider.current.scrollWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "horizontal-cards-scroll",
            markers: false,
            onUpdate: (self) => {
              // Optional: log progress for debugging
              // console.log("Progress:", self.progress);
            }
          }
        });

      }, component);

      return () => {
        ctx.revert();
      };
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  // Refresh ScrollTrigger on mount and when window resizes
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    // Initial refresh after component mounts
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="core-offering-cards">
      <div className="core-offering-cards__container" ref={component}>

        <div className="core-offering-cards__title-wrapper">
          <motion.h2
            className="core-offering-cards__title"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
          >
            CORE OFFERINGS
            {/* <ParagraphTextReveal>CORE OFFERINGS</ParagraphTextReveal> */}
          </motion.h2>
        </div>

        <div className="core-offering-cards__horizontal">
          <div className="core-offering-cards__list" ref={slider}>
            {offerings.map((offering, index) => (
              <div
                key={offering.id}
                className="core-offering-cards__card"
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
                      sizes="100vw"
                      // priority={index === 0}
                      className="core-offering-cards__image"
                    />

                    <div className="core-offering-cards__overlay">
                      <p className="core-offering-cards__description">
                        {offering.description}
                      </p>

                      <div>
                        {/* <Link
                          href={offering.href}
                          className="core-offering-cards__btn"
                        >
                          Learn more
                        </Link> */}

                        <CommonButton
                          buttonText="Learn more"
                          route={offering.href}
                          padding="10px 28px"
                          bgColor="#ffffff"
                          hoverBgColor="#540B0E"
                          fontSize="15px"
                          textColor="#000"
                          hoverTextColor="#ffffff"
                        />

                      
                      </div>
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