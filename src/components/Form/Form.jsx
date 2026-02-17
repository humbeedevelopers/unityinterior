"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.scss";
import { motion } from "framer-motion";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="contactForm">
      <div className="contactForm__container">
        {/* LEFT CONTENT */}
        <div className="contactForm__content">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="contactForm__heading">
            LET’S MAKE AN <br />
            EXQUISITE <br />
            SPACE <br />
            <span>TOGETHER</span>
          </motion.h2>
        </div>

        {/* FORM */}
        <form
          className="contactForm__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="contactForm__field">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className="contactForm__error">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="contactForm__field">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="contactForm__error">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="contactForm__field">
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="contactForm__error">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="contactForm__field">
            <textarea
              rows="3"
              placeholder="Message"
              {...register("message")}
            />
            {errors.message && (
              <span className="contactForm__error">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="contactForm__submit"
            disabled={isSubmitting}
          >
            Submit
            {/* <span className="contactForm__arrow">→</span> */}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
