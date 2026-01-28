"use client";
import { ReactLenis, useLenis } from 'lenis/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function LenisSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      // options={{
      //   lerp: 0.2,  
      //   duration: 1.1,
      //   smoothWheel: true,
      //   wheelMultiplier: 1,
      //   touchMultiplier: 2,
      //   easing: (t) => t * (2 - t),
      //   infinite: false,
      // }}
      options={{
        lerp: 0.08,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // smoother than default easeOut
        infinite: false,
      }}

    >
      <LenisSync />
      {children}
    </ReactLenis>
  );
}