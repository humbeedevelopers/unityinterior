"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import "./Header.scss";
import Logo from "@/images/websitelogo.svg";


// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 90% 40px)",
//     transition: {
//       delay: 0.3,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at calc(100% - 44px) 44px)`,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(100% - 44px) 44px)",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 26,
      mass: 1.4,
    },
    // transition: {
    //   delay: 0.2,
    //   type: "spring",
    //   stiffness: 400,
    //   damping: 40,
    // },
  },
};


const navVariants = {
  open: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 40,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};


const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Services", href: "/" },
    { name: "Blogs", href: "/" },
    { name: "About", href: "/" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Unity Interiors Logo" width={130} height={50} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index} className={item.name === "Home" ? "active" : ""}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="header-cta">
          <Link href="/contact" className="contact-btn">
            Contact us
          </Link>

          {/* Mobile Toggle */}
          {/* <button className="hamburger" onClick={() => toggleOpen()}>
            <span />
            <span />
            <span />
          </button> */}
          <motion.button
            className="hamburger"
            onClick={() => toggleOpen()}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
            />
          </motion.button>

        </div>
      </div>

      <motion.nav
        className="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={1000}
        ref={containerRef}
      >
        <motion.div className="mobile-bg" variants={sidebar} />

        <motion.ul variants={navVariants}>
          {navLinks.map((item, i) => (
            <motion.li key={i} variants={itemVariants}>
              <Link href={item.href} onClick={() => toggleOpen()}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  );
};

export default Header;
