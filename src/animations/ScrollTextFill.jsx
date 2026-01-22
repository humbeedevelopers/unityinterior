import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollTextFill.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollFillText = ({ text = "", pin = true }) => {
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
        start: pin ? "top top" : "top 80%",
        end: pin ? "+=200%" : "top 30%",
        scrub: true,
        pin,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, pin]);

  return (
    <section
      ref={containerRef}
      className={`scroll-fill-section ${pin ? "is-pinned" : "not-pinned"}`}
    >
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
