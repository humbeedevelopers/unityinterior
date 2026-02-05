import Image from "next/image";
import "./ContactUsHero.scss";
import ContactHeroImg from "@/images/contactusbannner.png"; 

const ContactUsHero = () => {
  return (
    <section className="contactUsHero">
      <div className="contactUsHero__container">

        <div className="contactUsHero__header">
          <h2 className="contactUsHero__title">CONTACT US</h2>

          <p className="contactUsHero__subtitle">
            Lorem Ipsum is simply dummy
            text of the printing and
            typesetting industry.
          </p>
        </div>

      
        <div className="contactUsHero__imageWrapper">
          <Image
            src={ContactHeroImg}
            alt="Contact Us Interior"
            // fill
            className="contactUsHero__image"
          />

          
          <button className="contactUsHero__cta">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
