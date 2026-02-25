"use client";

import Image from "next/image";
import "./ProjectInner.scss";
import { motion, AnimatePresence } from "framer-motion";

const ProjectInner = ({ project }) => {
    // if (!project) return null;

    // const {
    //     title,
    //     description,
    //     client,
    //     value,
    //     area,
    //     gallery = [],
    // } = project;

    if (!project?.acf) return null;

    const {
        project_client_description,
        project_client_name,
        project_value,
        project_surface_area,
        project_images,
    } = project.acf;

    // Build gallery array dynamically
    const galleryImages = [];

    // Include main image first
    if (project_images?.main_image?.url) {
        galleryImages.push(project_images.main_image);
    }

    // Loop gallery_image_1 to gallery_image_6
    for (let i = 1; i <= 6; i++) {
        const image = project_images?.[`gallery_image_${i}`];
        if (image?.url) {
            galleryImages.push(image);
        }
    }
    return (
        <section className="ProjectInner">
            <div className="ProjectInner__container">
                {/* Header */}
                <div className="ProjectInner__header">
                    <div className="ProjectInner__left">
                        {project_client_description && (
                            <p className="ProjectInner__desc">{project_client_description}</p>
                        )}


                    </div>

                    <div className="ProjectInner__meta">

                        <ul>
                            {project_client_name && (
                                <li>

                                    <span>CLIENT:</span>
                                    <strong>{project_client_name}</strong>
                                </li>
                            )}

                            {project_value && (
                                <li>
                                    <span>VALUE:</span>
                                    <strong>{project_value}</strong>
                                </li>
                            )}
                            {project_surface_area && (
                                <li>
                                    <span>SURFACE AREA:</span>
                                    <strong>{project_surface_area}</strong>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Gallery */}
                {galleryImages.length > 0 && (
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
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.25, 0.1, 0.25, 1],
                                        delay: index * 0.01
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    // key={index}
                                    key={img.id || index}
                                    className={`ProjectInner__item ProjectInner__item--${index}`}
                                >
                                    <Image
                                        src={img.url}
                                        alt={img.alt || project.title?.rendered || "Project image"}
                                        // src={img}
                                        // alt={`${title} image ${index + 1}`}
                                        // width={img.width}
                                        // height={img.height}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="GalleryImg"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectInner;
