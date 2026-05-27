"use client";
import "./Hero.scss";
import { useEffect, useRef } from "react";
import CommonButton from "@/animations/Buttons/CommonButton";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Desktop and mobile use separate frame folders (same naming: 000.jpg, 001.jpg…).
// Drop the mobile frames into `public/hero_section_frames_mobile/` later and
// adjust `count` if the mobile sequence has a different number of frames.
const FRAME_SETS = {
  desktop: { dir: "/hero_section_frames", count: 193 },
  mobile: { dir: "/hero_section_frames_mobile", count: 196 },
};
const MOBILE_BREAKPOINT = 768;

const getActiveSet = () =>
  window.innerWidth <= MOBILE_BREAKPOINT ? FRAME_SETS.mobile : FRAME_SETS.desktop;

const getFrameUrl = (dir, index) =>
  `${dir}/${String(index).padStart(3, "0")}.jpg`;

const Hero = ({ description, buttonText, buttonLink }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const wrapper = wrapperRef.current;

    let activeSet = null;
    let tl = null;

    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalHeight === 0) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // "cover": scale so the frame fills the canvas on BOTH axes (cropping
      // the overflow), so it fits any screen size without letterboxing.
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const x = (w - drawW) / 2;
      const y = (h - drawH) / 2;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, x, y, drawW, drawH);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(currentFrameRef.current);
    };

    const build = (set) => {
      activeSet = set;
      const { dir, count } = set;

      // Tall enough for full animation + one viewport of "rest" at last frame.
      // This wrapper is the scroll track; the inner section is `position: sticky`.
      wrapper.style.height = `${count * 16 + window.innerHeight}px`;

      const images = Array.from({ length: count }, (_, i) => {
        const img = new Image();
        img.src = getFrameUrl(dir, i);
        img.onload = () => {
          // Draw whenever the frame that just loaded is the one currently needed
          if (i === currentFrameRef.current) drawFrame(i);
        };
        return img;
      });
      imagesRef.current = images;

      resizeCanvas();

      const obj = { frame: currentFrameRef.current };

      tl = gsap.to(obj, {
        frame: count - 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${count * 16}`,
          scrub: 0.5,
          // onRefresh fires after GSAP recalculates positions on mount —
          // this is the only reliable moment to draw the frame that matches
          // the actual scroll position (onUpdate never fires at progress=0).
          onRefresh: (self) => {
            const frame = Math.round(self.progress * (count - 1));
            currentFrameRef.current = frame;
            drawFrame(frame);
          },
        },
        onUpdate: () => {
          const frame = Math.round(obj.frame);
          currentFrameRef.current = frame;
          drawFrame(frame);
        },
      });
    };

    const teardown = () => {
      if (tl) {
        tl.scrollTrigger?.kill();
        tl.kill();
        tl = null;
      }
    };

    build(getActiveSet());

    const onResize = () => {
      resizeCanvas();
      const next = getActiveSet();
      if (next !== activeSet) {
        // Crossed the desktop/mobile breakpoint — swap frame set & rebuild.
        currentFrameRef.current = 0;
        teardown();
        build(next);
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      teardown();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", onResize);
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
