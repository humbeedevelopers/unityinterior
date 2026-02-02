"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useCycle, AnimatePresence } from "framer-motion";
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


const socialContainerVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.35,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const socialItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
};




const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const pathname = usePathname();
  const [openService, setOpenService] = React.useState(false);



  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Interior Design", href: "/services/interior-design" },
        { name: "Architecture Planning", href: "/services/architectural-planning" },
        { name: "3D Visualization", href: "/services/3d-visualization" },
      ],
    },
    // { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about-us" },
  ];

  // const isActiveNav = (itemHref, hasChildren = false) => {
  //   if (hasChildren) {
  //     return pathname === itemHref || pathname.startsWith(`${itemHref}/`);
  //   }
  //   return pathname === itemHref;
  // };


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Unity Interiors Logo" width={130} height={50} />
          </Link>
        </div>

        {/* Desktop Nav */}
        {/* <nav className="nav desktop-nav">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}
                // className={item.name === "Home" ? "active" : ""}
                // for active background 
                className={`nav-item ${pathname === item.href ? "active" : ""
                  } ${item.children ? "has-dropdown" : ""}`}
              // className={pathname === item.href ? "active" : ""}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav> */}
        <nav className="nav desktop-nav">
          <ul>
            {navLinks.map((item, index) => (
              <li
                key={index}
                // className={`nav-item ${isActiveNav(item.href, !!item.children) ? "active" : ""
                //   } ${item.children ? "has-dropdown" : ""}`}

                className={`nav-item ${pathname === item.href ? "active" : ""
                  } ${item.children ? "has-dropdown" : ""}`}
              >
                <Link href={item.href}
                  onClick={(e) => {
                    if (item.href === "/services") {
                      e.preventDefault();
                    }
                  }}>{item.name}</Link>
                {/* {item.children ? (
                  <span className="nav-link nav-link--disabled">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href}>{item.name}</Link>
                )} */}


                {item.children && (
                  <motion.ul
                    className="dropdown"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  // initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
                  // whileHover={{ opacity: 1, y: 0, pointerEvents: "auto" }}
                  >
                    {item.children.map((child, i) => (
                      <li key={i}>
                        <Link href={child.href}>{child.name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </nav>


        {/* CTA */}
        <div className="header-cta">
          <Link href="/contact" className="contact-btn">
            <span className="contactInner">Contact us</span>
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
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            //  className={`mobile-menu ${isOpen ? "open" : ""}`}
            className="mobile-menu"
            key="mobile-menu"
            variants={sidebar}
            initial="closed"
            animate="open"
            exit="closed"
            custom={1000}
            ref={containerRef}
          // initial={false}
          // animate={isOpen ? "open" : "closed"}
          // custom={1000}
          // ref={containerRef}
          >
            <motion.div className="mobile-bg" variants={sidebar} />

            <motion.ul variants={navVariants}>
              {navLinks.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className={`mobile-item ${pathname === item.href ? "active" : ""
                    }`}
                >
                  {!item.children ? (
                    <Link href={item.href} onClick={() => toggleOpen()}>
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="mobile-dropdown-btn"
                        onClick={() => setOpenService(!openService)}
                      >
                        {item.name}
                        <span className={openService ? "rotate" : ""}>+</span>
                      </button>

                      <AnimatePresence>
                        {openService && (
                          <motion.ul
                            className="mobile-submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                          >
                            {item.children.map((child, j) => (
                              <li key={j}>
                                <Link
                                  href={child.href}
                                  onClick={() => {
                                    toggleOpen();
                                    setOpenService(false);
                                  }}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.li>
              ))}

              {/* {navLinks.map((item, i) => (
                <motion.li key={i} variants={itemVariants}
                  className={pathname === item.href ? "active" : ""}
                >
                  <Link href={item.href} onClick={() => toggleOpen()}>
                    {item.name}
                  </Link>
                </motion.li>
              ))} */}
            </motion.ul>

            <motion.div
              className="mobile-socials"
              variants={socialContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            // initial={false}
            // animate={isOpen ? "open" : "closed"}
            >
              {[
                { name: "YOUTUBE", href: "https://www.youtube.com/channel/UCQLqYlIthw4Buk6XKW4lqNg" },
                { name: "INSTAGRAM", href: "https://www.instagram.com/ekta_interior/" },
                { name: "FACEBOOK", href: "https://www.facebook.com/unityinteriorstudio" },
                { name: "THREADS", href: "https://x.com/unityinteriors" },
                { name: "LINKEDIN", href: "https://www.linkedin.com/in/ektamakadia/" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialItemVariants}
                //  onClick={() => toggleOpen()}   //for closing menu bar if needed
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>

            {/* <motion.div
          className="mobile-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="https://instagram.com" target="_blank">YOUTUBE</Link>
          <Link href="https://instagram.com" target="_blank">INSTAGRAM</Link>
          <Link href="https://instagram.com" target="_blank">FACEBOOK</Link>
          <Link href="https://instagram.com" target="_blank">THREADS</Link>
          <Link href="https://instagram.com" target="_blank">LINKEDIN</Link>
        </motion.div> */}

          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
