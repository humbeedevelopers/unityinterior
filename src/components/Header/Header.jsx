"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Header.scss";
import Image from "next/image";
import Logo from "@/images/websitelogo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className="logo">
          <Link href="/">
            <Image
              src={Logo}
              alt="Unity Interiors Logo"
              width={130}
              height={50}
            />
          </Link>
          </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((item, index) => (
              <li key=  {index} className={item.name === "Home" ? "active" : ""}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <Link href="/contact" className="contact-btn">
            Contact us
          </Link>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
