"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Banner from "@/images/countdownBanner.png"
import "./CountDown.scss";

const statsData = [
  { value: 350, suffix: "+", label: "PROJECTS" },
  { value: 12, suffix: "+", label: "CREATIVE MINDS" },
  { value: 10, suffix: "+", label: "YEARS" },
];

const CountDown = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    statsData.forEach((stat, index) => {
      let start = 0;
      const duration = 1500;
      const increment = stat.value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, [visible]);

  return (
    <section className="numbers" ref={sectionRef}>
      <div className="numbers__container">
        <div className="numbers__stats">
          {statsData.map((stat, index) => (
            <div className="numbers__item" key={index}>
              <h3>
                {counts[index]}
                {stat.suffix}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="numbers__image">
          <Image
            src={Banner}
            alt="Art showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default CountDown;
