"use client";

import Image from "next/image";
import "./ProjectInner.scss";
import { motion, AnimatePresence } from "framer-motion";

const ProjectInner = ({ project }) => {
    if (!project) return null;

    const {
        title,
        description,
        client,
        value,
        area,
        gallery = [],
    } = project;


    return (
        <section className="ProjectInner">
            <div className="ProjectInner__container">
                {/* Header */}
                <div className="ProjectInner__header">
                    <div className="ProjectInner__left">
                        <p className="ProjectInner__desc">{description}</p>


                    </div>

                    <div className="ProjectInner__meta">

                        <ul>
                            <li>
                                <span>CLIENT:</span>
                                <strong>{client}</strong>
                            </li>
                            <li>
                                <span>VALUE:</span>
                                <strong>{value}</strong>
                            </li>
                            <li>
                                <span>SURFACE AREA:</span>
                                <strong>{area}</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gallery */}

                <div className="ProjectInner__GallerySection">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="ProjectInner__title">
                        PROJECT <br /> GALLERY
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="ProjectInner__gallery">
                        {gallery.map((img, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: index * 0.01
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                key={index}
                                className={`ProjectInner__item ProjectInner__item--${index}`}
                            >
                                <Image
                                    src={img}
                                    alt={`${title} image ${index + 1}`}

                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="GalleryImg"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInner;
