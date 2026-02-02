"use client";

import React from "react";
import "./ContactUsMap.scss";

const ContactUsMap = () => {
  return (
    <section className="contact-us-map">
      <div className="contact-us-map__container">
        <div className="contact-us-map__card">
          <div className="contact-us-map__iframe-wrapper">
            <iframe
              className="contact-us-map__iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.6373595755385!2d72.513891!3d23.073753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d795476f4dd%3A0xc11c07a42b135ca4!2sUnity%20Interiors!5e0!3m2!1sen!2sus!4v1770031198499!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unity Interiors Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.6373595755385!2d72.513891!3d23.073753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d795476f4dd%3A0xc11c07a42b135ca4!2sUnity%20Interiors!5e0!3m2!1sen!2sus!4v1770031198499!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

export default ContactUsMap;
