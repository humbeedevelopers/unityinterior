"use client";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/websitelogo.svg";
import PhoneLogo from "@/images/PHONE.svg";
import EmailLogo from "@/images/EMAIL.svg";
import FooterImg from "@/images/footerimage.png";
import TextRotator from "@/animations/TextRotator";
import PageTransition from "@/animations/pageTransition/PageTransition";

const Footer = () => {
  const animatedWords = ["home", "office", "living"];
  const FooterWords = ["MAKING", "DREAMS", "TRUE"];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* LEFT CONTENT */}
        <div className="footer__left">
          <h2 className="footer__headline">
            WE MAKE YOUR <br />
            <TextRotator words={animatedWords}></TextRotator>
            {/* home / office / living */}
            <br />
            {/* dream come true */}
            DREAM TO LIFE
          </h2>

          <div className="footer__brand">
             <PageTransition>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Unity Interiors"
                width={120}
                height={50}
              /></Link>
              </PageTransition>
          </div>

          <p className="footer__description">
            At Unity Interiors, every space is approached with clarity, intention, and attention to detail. We focus on creating designs that are not only visually refined but also practical and easy to execute. From planning layouts to final finishes, each decision is made to ensure balance, functionality, and long-term value. The result is a space that feels effortless, works seamlessly, and reflects the people it is designed for.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="footer__right">
          <div className="footer__links">
            <ul>
              <li><PageTransition><Link href="/">Home</Link></PageTransition></li>
              <li><PageTransition><Link href="/blogs">Blogs</Link></PageTransition></li>
              <li><PageTransition><Link href="/contact-us">Contact</Link></PageTransition></li>
              <li><PageTransition><Link href="/cities">Cities</Link></PageTransition></li>
            </ul>

            <ul>
              <li><PageTransition><Link href="/services/interior-design">Interior Designing</Link></PageTransition></li>
              {/* <li><PageTransition><Link href="/services/architectural-planning">Architectural Planning</Link></PageTransition></li> */}
              <li><PageTransition><Link href="/services/3d-visualization">3D Visualization</Link></PageTransition></li>
            </ul>
          </div>

          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="icon">
                <Image
                  src={PhoneLogo}
                  alt="Unity Interiors"
                  width={25}
                  height={25}
                />
              </span>
              <a href="tel:+917405169196">+91 7405169196</a>
            </div>

            <div className="footer__contact-item">
              <span className="icon">
                <Image
                  src={EmailLogo}
                  alt="Unity Interiors"
                  width={25}
                  height={25}
                />
              </span>
              <a href="mailto:info@unityinteriors.com">
                info@unityinteriors.com
              </a>
            </div>
          </div>

          <div className="footer__socials">
            <Link href="https://www.youtube.com/channel/UCQLqYlIthw4Buk6XKW4lqNg">YouTube</Link>
            <Link href="https://www.instagram.com/ekta_interior/">Instagram</Link>
            <Link href="https://www.facebook.com/unityinteriorstudio">Facebook</Link>
            <Link href="https://x.com/unityinteriors">Threads</Link>
            <Link href="https://www.linkedin.com/in/ektamakadia/">LinkedIn</Link>
          </div>
        </div>

        {/* <div className="footer-visual">
          <h2 className="footer-visual__text">MAKING</h2>

          <div className="footer-visual__image">
            <Image
              src={FooterImg}
              alt="Making People"
            />
          </div>
        </div> */}

      </div>
      <div className="footer-visual">
                    
        <h2 className="footer-visual__text">
          {/* MAKING */}
          <TextRotator words={FooterWords}></TextRotator>
          </h2>

        <div className="footer-visual__image">
          <Image
            src={FooterImg}
            alt="Making People"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
