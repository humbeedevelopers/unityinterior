"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollTextFill.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollFillText = ({ text = "" }) => {
  if (!text) return null;

  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  lettersRef.current = [];

  useEffect(() => {
    const letters = lettersRef.current;

    const tween = gsap.to(letters, {
      color: "#540b0e",
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        // Start filling as section enters, finish before it exits
        start: "top 85%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text]);

  return (
    <section ref={containerRef} className="scroll-fill-section">
      <p className="scroll-fill-text">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="scroll-word">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                ref={(el) => el && lettersRef.current.push(el)}
                className="scroll-letter"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>
    </section>
  );
};

export default ScrollFillText;
