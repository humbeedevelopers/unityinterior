"use client";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/websitelogo.svg";
import PhoneLogo from "@/images/PHONE.svg";
import EmailLogo from "@/images/EMAIL.svg";
import FooterImg from "@/images/footerimage.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* LEFT CONTENT */}
        <div className="footer__left">
          <h2 className="footer__headline">
            where <br />
            home / office / living <br />
            dream come true
          </h2>

          <div className="footer__brand">
            <Image
              src={Logo}
              alt="Unity Interiors"
              width={120}
              height={50}
            />
          </div>

          <p className="footer__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="footer__right">
          <div className="footer__links">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            <ul>
              <li><Link href="/interior-designing">Interior Designing</Link></li>
              <li><Link href="/architectural-planning">Architectural Planning</Link></li>
              <li><Link href="/3d-visualization">3D Visualization</Link></li>
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
            <Link href="#">YouTube</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Threads</Link>
            <Link href="#">LinkedIn</Link>
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
    </footer>
  );
};

export default Footer;
