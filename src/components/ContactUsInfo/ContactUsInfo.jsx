'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import arrow from "@/images/WhiteNext.svg";
import InstaLogo from "@/images/insta.svg";
import YtLogo from "@/images/youtube.svg";
import BehanceLogo from "@/images/behance.svg";
import LinkedinLogo from "@/images/linkedin.svg";
import TwitterLogo from "@/images/twitter.svg";
import FacebookLogo from "@/images/facebook.svg";
import './ContactUsInfo.scss';
import ParagraphTextReveal from '@/animations/ParagraphTextReveal';

const ContactUsInfo = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Too short')
        .required('Full name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, 'Invalid phone number')
        .required('Phone number is required'),
      message: Yup.string()
        .min(10, 'Message is too short')
        .required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form Data:', values);
      resetForm();
    },
  });

  return (
    <section className="contact-us-info">
      <div className="contact-us-info__container">

        {/* Left Content */}
        <div className="contact-us-info__content">
          <h2 className="contact-us-info__title">
            <ParagraphTextReveal>
            WE ARE ALWAYS READY TO<br />ANSWER YOUR QUESTIONS</ParagraphTextReveal>
          </h2>

          <p className="contact-us-info__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>

          <div className="contact-us-info__locations">
            <div className="contact-us-info__location">
              <h4>INDIA</h4>
              <p>
                506, I Square Corporate Park,<br />
                Science City Rd, Ahmedabad,<br />
                Gujarat 380059
              </p>
              <span>
                Mobile:
                <Link href="tel:+917405169196" className="contact-us-info__tel">
                  +91 7405169196
                </Link>
              </span>

              <span>Mon - Sat: 8:00 - 18:00</span>
            </div>

            <div className="contact-us-info__location">
              <h4>London</h4>
              <p>
                6 Cromwell Road<br />
                Middlesex Wembley<br />
                London, UK HA0 1JS
              </p>
              <span>
                Mobile:
                <Link href="tel:+447908746211" className="contact-us-info__tel">
                  +44 7908746211
                </Link>
              </span>


              <span>Mon - Sat: 8:00 - 18:00</span>
            </div>
          </div>

          <div className="contact-us-info__social">
            <span>SOCIAL MEDIA :</span>
            <ul>
              <li>
                <Image
                  src={InstaLogo}
                  alt="Instagram"
                  className='SocialImg'
                />
              </li>

              <li>
                <Image
                  src={YtLogo}
                  alt="YouTube"
                  className='SocialImg'
                />
              </li>

              <li>
                <Image
                  src={LinkedinLogo}
                  alt="LinkedIn"
                  className='SocialImg'
                />
              </li>

              <li>
                <Image
                  src={FacebookLogo}
                  alt="Facebook"
                  className='SocialImg'
                />
              </li>

              <li>
                <Image
                  src={BehanceLogo}
                  alt="Behance"
                  className='SocialImg'
                />
              </li>

              <li>
                <Image
                  src={TwitterLogo}
                  alt="X"
                  className='SocialImg'
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-us-info__form-wrapper">
          <form onSubmit={formik.handleSubmit} className="contact-us-info__form">

            <div className="contact-us-info__field">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <small>{formik.errors.fullName}</small>
              )}
            </div>

            <div className="contact-us-info__field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <small>{formik.errors.email}</small>
              )}
            </div>

            <div className="contact-us-info__field">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <small>{formik.errors.phone}</small>
              )}
            </div>

            <div className="contact-us-info__field">
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && (
                <small>{formik.errors.message}</small>
              )}
            </div>

            {/* <button type="submit" className="contact-us-info__submit">
              Submit <span>→</span>
            </button> */}
            <button type="submit" className="contact-us-info__submit">
              <span className="contact-us-info__label">
                Submit
              </span>
              <span className="contact-us-info__icon">
                <Image
                  src={arrow}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className='svgIcon'
                />
              </span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInfo;
