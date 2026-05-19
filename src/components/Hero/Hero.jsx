"use client";
import "./Hero.scss";
import { useEffect, useRef } from "react";
import CommonButton from "@/animations/Buttons/CommonButton";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 193;

const getFrameUrl = (index) =>
  `/hero_section_frames/${String(index).padStart(3, "0")}.jpg`;

const Hero = ({ description, buttonText, buttonLink }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const wrapper = wrapperRef.current;

    // Tall enough for full animation + one viewport of "rest" at last frame.
    // This wrapper is the scroll track; the inner section is `position: sticky`.
    wrapper.style.height = `${FRAME_COUNT * 16 + window.innerHeight}px`;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(currentFrameRef.current);
    };

    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalHeight === 0) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const scale = w / img.naturalWidth;
      const drawH = img.naturalHeight * scale;
      const y = (h - drawH) / 2;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, y, w, drawH);
    };

    const images = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (i === 0) resizeCanvas();
      };
      return img;
    });
    imagesRef.current = images;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const obj = { frame: 0 };

    // No GSAP pin — CSS `position: sticky` on .HeroSection keeps the hero in
    // view (works now that globals.css uses `overflow-x: clip` not `hidden`).
    // ScrollTrigger only scrubs the frame index across the wrapper's height.
    const tl = gsap.to(obj, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: `+=${FRAME_COUNT * 16}`,
        scrub: 0.5,
      },
      onUpdate: () => {
        const frame = Math.round(obj.frame);
        currentFrameRef.current = frame;
        drawFrame(frame);
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="HeroWrapper">
      <section className="HeroSection">
        <div className="hero">
          <canvas ref={canvasRef} className="hero__canvas" />
          <div className="hero__overlay" />

          <div className="hero__content">
            <div className="hero__footer">
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0 }}
                viewport={{ once: true }}
                className="hero__description"
              >
                {description}
              </motion.p>
              <CommonButton
                buttonText={buttonText || "View Projects"}
                route={buttonLink || "/projects"}
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
      </section>
    </div>
  );
};

export default Hero;
