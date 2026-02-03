"use client";

import Image from "next/image";
import "./BlogsInner.scss";

const BlogsInner = ({ blog }) => {
  return (
    <section className="blogsInner">
      <div className="blogsInner__container">
        {/*Intro */}
        <div className="blogsInner__intro">
          <p className="blogsInner__introText">
            {blog.intro}
          </p>
        </div>

        {/*Content */}
        <div className="blogsInner__content">
          {blog.sections.map((section, index) => (
            <div className="blogsInner__section" key={index}>
              <h2 className="blogsInner__heading">
                {index + 1}. {section.title}
              </h2>

              {/* {section.paragraphs.map((para, i) => (
                <p className="blogsInner__paragraph" key={i}>
                  {para}
                </p>
              ))} */}
              {section.paragraphs.map((para, i) => {
                if (!para?.text) return null;

                return (
                  <p className="blogsInner__paragraph" key={i}>
                    {para.bold && (
                      <p className="blogsInner__bold">
                        {para.bold}{" "}
                      </p>
                    )}

                    {para.text.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                );
              })}





              {section.image && (
                <div className="blogsInner__imageWrap">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={500}
                    height={500}
                    className="blogsInner__image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsInner;
